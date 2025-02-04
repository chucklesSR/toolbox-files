import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React Test App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}