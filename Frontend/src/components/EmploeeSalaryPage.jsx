import React, { useState } from 'react';
import axios from 'axios';
import NavBarButton from './NavBar';
import { usePDF } from 'react-to-pdf';
// EmployeeSalaryRow component to render each row in the table
const EmployeeSalaryRow = ({ salary }) => {
  return (
    <tr>
      <td>{salary.id}</td>
      <td>{salary.eid}</td>
      <td>{new Date(salary.paymentDate).toLocaleString()}</td>
      <td>{salary.amount}</td>
      <td>{salary.description}</td>
    </tr>
  );
};

const EmployeeSalaryPageDate = () => {
  const [id, setId] = useState('');
  const [salary, setSalary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const userData = {
      eid: id
    };
    

    try {
      const response = await axios.post('http://localhost:8080/api/user/history', userData, {
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
        
        setSalary(response.data); // Set the fetched salary data
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
    <div className="employee-salary-page">
      <h1>Employee Salary Information</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Employee ID: </label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={handleIdChange}
          placeholder="Enter employee ID"
        />
        <button type="submit">Get Salary</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {salary && (
        <>
           <button onClick={() => toPDF()}>Download PDF</button>
           <div ref={targetRef}>
        <table>
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
            {salary.map((salaryi,index)=>{
              return <EmployeeSalaryRow salary={salaryi} key={index} />
            })} 
          </tbody>
        </table>
        </div>
        </>
      )}
    </div>
    </>
  );
};

export default EmployeeSalaryPageDate;
