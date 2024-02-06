import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/signin.css";
import endpoint from "../../apis/endpoint";
import axios from 'axios';

export default function AddNewEmployee() {
    const [employeeid, setUserID] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSignin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(endpoint.addEmployee, {
          employeeid,
          password,
          name,
          email,
          phonenumber
        });
        console.log("client : ",response);
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          await alert(response.data.message)
        }
        if(response.status === 201) {
          console.log(response);
          setErrorMessage(response.data.message)
        }
      } catch (error) {
        if (error.response && error.response.status === 201) {
          setErrorMessage('User already registered');
        } else {
          setErrorMessage('An error occurred');
        }
    }
    };
 
 // This following section will display the form that takes the input from the user.
 return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={handleSignin}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Add New employee</h3>
        {errorMessage && <div className="alert alert-danger custom-error">{errorMessage}</div>}
        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Name"
            required=""
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control mt-1"
            placeholder="Enter Phone Number"
            required=""
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="e-mail"
            className="form-control mt-1"
            placeholder="Enter Email"
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>employee ID</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter employee ID"
            required=""
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            required=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="button" onClick={handleSignin} className="btn btn-success">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          {/* Forgot <a href="#">password?</a> */}</p>
      </div>
    </form>
  </div>
);
}