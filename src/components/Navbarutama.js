import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarutama() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav defaultActiveKey="/home" as="ul" variant="dark">
      <Nav.Item as="li">
        <Nav.Link href="/home">Beranda</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">Artikel</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">Jasa</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">Tentang</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/home">Kontak</Nav.Link>
      </Nav.Item>
    </Nav>
    </Navbar>
    
  );
}

export default Navbarutama;