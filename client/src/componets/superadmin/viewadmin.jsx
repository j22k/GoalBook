import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/signin.css";
import { MDBDataTable } from 'mdbreact';
import axios from "axios";
import endpoint from "../../apis/endpoint";

const ViewAdmin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(endpoint.fetchAdmins);
        setAdmins(response.data.admins);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdmins();
  }, []);

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Phone Number',
        field: 'phonenumber',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'User ID',
        field: 'userid',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Password',
        field: 'password',
        sort: 'asc',
        width: 150
      },
    ],
    rows: admins.map(admin => ({
      name: admin.name,
      phonenumber: admin.phonenumber,
      email: admin.email,
      userid: admin.userid,
      password: admin.password,
    })),
  };

  return (
    <div className="view-admin">
      <div className="view-admin-container">
        <MDBDataTable
          striped
          bordered
          hover
          data={data}
        />
      </div>
    </div>
  );
}

export default ViewAdmin;
