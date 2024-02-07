import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/viewbookings.css";
import axios from "axios";
import endpoint from "../../apis/endpoint"; 
import { Form } from 'react-bootstrap';

const ViewBookings = () => {
    const [todayDate, setTodayDate] = useState('');

  // Function to format date as yyyy-MM-dd
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Set today's date when component mounts
  useEffect(() => {
    const today = new Date();
    setTodayDate(formatDate(today));
  }, []);
  return (
    <div className="view-booking">
      <div className="view-booking-date">
      <Form.Control
                type="date"
                name="datepic"
                placeholder="DateRange"
                value={todayDate}
                // onChange={(e) => setDate(e.target.value)}
              />
      </div>
      <div className="view-booking-data">
        <div className="view-booking-card"></div>
      </div>
    </div>
  );
}

export default ViewBookings;
