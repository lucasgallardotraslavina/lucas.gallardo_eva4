import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand> elige tus componenetes y  arma tu computadora ideal </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/Registrar_componentes">Registrar Componentes</Nav.Link>
              <Nav.Link as={Link} href="/Tabla_datos">Tabla de Datos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <p>elige alguna opcion</p>
      </Container>
    </>
  );
}
