import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/viewbookings.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";
import endpoint from "../../apis/endpoint";

const ViewBookings = () => {
  const [todayDate, setTodayDate] = useState('');
  const [bookingData, setBookingData] = useState([]);


  useEffect(() => {
    const fetchbookingData = async () => {
      try {
        const response = await axios.get(endpoint.fetchBooking);
        console.log(response);
        setBookingData(response.data.Bookings);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbookingData();
  }, []);
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
        <div className="form-group mt-3">
          <input
            type="date"
            className="form-control mt-1"
            placeholder="Enter Name"
            required=""
            value={todayDate}
          // onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      {bookingData && bookingData.length > 0 && bookingData.map((booking, index) => (
          <div className="view-booking-card" key={index}>
            <Form>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Time</Form.Label>
                <Form.Control value={booking.time} disabled />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Booking Date </Form.Label>
                  <Form.Control value={booking.bookingdate} disabled />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label> Date of Booking</Form.Label>
                  <Form.Control value={booking.dateofbooking} disabled />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={booking.name} disabled />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control value={booking.phonenumber} disabled />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Booked by</Form.Label>
                <Form.Control value={booking.Id} disabled />
              </Form.Group>
              <Button variant="danger" type="submit">
                delete
              </Button>
              
                
      <Spinner animation="border" variant="danger" />
            </Form>
          </div>
        ))}
      </div>
  );
}

export default ViewBookings;
