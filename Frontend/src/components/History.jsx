import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import NavBarButton from './NavBar';
import { usePDF } from 'react-to-pdf';
const EmployeeSalaryPage = () => {
  const [id, setId] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [salaries, setSalaries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const date = new Date(paymentDate);
    const formattedDate = date.toISOString().split("Z")[0]; // Remove the "Z" to match the backend's expected format
    const userData = {
        eid: id,
        month:formattedDate

      };
      
    
    try {
        const response = await axios.post('http://localhost:8080/api/user/salary', userData, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // Assuming the JWT token is in the response data under 'token'
        const token = response.data;
  
        // Save the JWT token in localStorage
        if (token) {
          localStorage.setItem('jwtToken', token);
          console.log('Token saved to localStorage');
          
          setSalaries(response.data); // Set the fetched salary data
        }
  
        // Handle the response (you can use the token for further API calls or redirect the user)
        console.log(response.data);
        
      } catch (err) {
        console.error(err);
      }
    setLoading(false);
  };

  return (
    <>

<NavBarButton/>
    <div className="container">
      <h1 className="mt-5">Employee Salary Information</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="form-group">
          <label htmlFor="id">Employee ID:</label>
          <input
            type="number"
            id="id"
            className="form-control"
            placeholder="Enter employee ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="datetime-local"
            id="paymentDate"
            className="form-control"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Get Salary
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}

      {salaries.length > 0 && (
        <>         
        <button onClick={() => toPDF()}>Download PDF</button>
        <div ref={targetRef}>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>EID</th>
              <th>Payment Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {salaries.map((salary) => (
              <tr key={salary.id}>
                <td>{salary.id}</td>
                <td>{salary.eid}</td>
                <td>{new Date(salary.paymentDate).toLocaleString()}</td>
                <td>{salary.amount}</td>
                <td>{salary.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </>
      )
      }
    </div>
    </>
  );
};

export default EmployeeSalaryPage;
