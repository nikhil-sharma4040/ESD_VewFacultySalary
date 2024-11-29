import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import EmployeeSalaryPage from './components/EmploeeSalaryPage';
import EmployeeSalaryPageDate from './components/History';

const App = () => {
  // Your logout and other functions can be defined here

  return (
     <>
            <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/salary" element={<EmployeeSalaryPage/>} />
            <Route path="/salarybydate" element={<EmployeeSalaryPageDate/>} /> 
          </Routes>
    </Router>
    </>
  );
}

export default App;
