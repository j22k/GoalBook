import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/addbooking.css";
import axios from "axios";
import endpoint from "../../apis/endpoint";
import { jwtDecode } from 'jwt-decode';

const AddNewBookings = () => {
    const [bookingdate, setDate] = useState();
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [errorMessage, setErrorMessage] = useState('');


    const token = localStorage.getItem('token');
    const handleSignin = async (e) => {
        e.preventDefault();
        var decodedToken = jwtDecode(token);
        var Id = decodedToken.id;
        try {
          const response = await axios.post(endpoint.addBooking, {
            bookingdate,
            phonenumber,
            name,
            time,
            Id,
          });
          console.log("client : ",response);
          if (response.status === 200) {
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
    return (
        <div className="view-booking">
            
            <div className="view-booking-data">
                <form className="Auth-form"  onSubmit={handleSignin}>
                    <div className="Auth-form-content">
                <h3 className="Auth-form-title" style={{ color: "white" }}>Add New Booking</h3>
                        {errorMessage && <div className="alert alert-danger custom-error">{errorMessage}</div>}
                        <div className="form-group mt-3">
                            <label>Date</label>
                            <input
                                type="date"
                                className="form-control mt-1"
                                placeholder="Enter Name"
                                required=""
                                onChange={(e) => setDate(e.target.value)}
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
                            <label htmlFor="time">Time</label>
                            <input
                                type="time"
                                id="time"
                                className="form-control mt-1"
                                placeholder="Select Time"
                                required=""
                                onChange={(e) => setTime(e.target.value)}
                            />

                        </div>
                        <div className="form-group mt-3">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter name"
                                required=""
                                onChange={(e) => setName(e.target.value)}
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
        </div>
    );
}

export default AddNewBookings;
