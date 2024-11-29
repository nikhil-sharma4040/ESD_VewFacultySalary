import React from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBarButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken"); // Replace "jwtToken" with your actual key name
    if (!jwtToken) {
      navigate("/login"); // Redirect to login page if token is missing
    }
  }, [navigate]); // Dependency array includes navigate to avoid unnecessary re-renders
  function logout() {
    localStorage.removeItem("jwtToken"); // Remove the token from localStorage
    window.location.reload(); // Reload the page
  }
  
  return (
    <div className="v-flex justify-content-center align-items-center" >
    <div className="text-center">
      
    <Link type="button" to="/salary" style={{marginLeft:10}} class="btn btn-primary">History</Link>
    <Link  type="button" to="/salarybydate" style={{marginLeft:10}} class="btn btn-primary">Salary By Month</Link >
    <Link  type="button" style={{marginLeft:10}} onClick={()=>logout()} class="btn btn-primary">Logout</Link >
    </div>
  </div>

  )
}

export default NavBarButton