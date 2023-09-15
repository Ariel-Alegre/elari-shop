import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="/" className='navbar-brand'>elari shop</Navbar.Brand>
 
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;