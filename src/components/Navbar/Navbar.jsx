import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="/" className='navbar-brand'>elari SNEAKERS</Navbar.Brand>
        {/*   <Nav className="me-auto">
            <Nav.Link href="#home">Información</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;