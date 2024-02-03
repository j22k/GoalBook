import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function nav({ onSelect }) {
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
      </Navbar>
      
     
    </>
  );
}

export default nav;