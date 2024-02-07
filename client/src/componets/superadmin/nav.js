import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { jwtDecode } from 'jwt-decode';
import Image from 'react-bootstrap/Image';

function Navi({ onSelect }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.name);
    }
  }, [token]); // Include token in the dependency array for useEffect

  const handleLogout = async () => {
    localStorage.removeItem('token');
    await navigate('/');
  };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  onClick={() => onSelect('add-new-admin')}>Add new admin</Nav.Link>
            <Nav.Link onClick={() => onSelect('view-admin')} >View Admins</Nav.Link>
            <Nav.Link onClick={() => onSelect('Home')}>Pricing</Nav.Link>
          </Nav>
        </Container>
        <Dropdown as={ButtonGroup}>
          <Container> {/* Wrap Image component inside Container */}
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="success">
              <Image
                src="/path/to/profile-icon.png"
                roundedCircle
                style={{ width: '30px', height: '30px', marginRight: '8px' }}
              />
              {username}
            </Dropdown.Toggle>
          </Container>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item className="red-dropdown-item" onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      
     
    </>
  );
}

export default Navi;