import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Main from './pages/main';
import logo from './img/logo2.png';
import React from 'react';
import { Row } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar bg="dark" variant="dark" className="mt-5">
      <Container>
        <Navbar.Brand><Row>©COPYRIGHT 2023 UNISNEAKERS LTDA. TODOS OS DIREITOS RESERVADOS</Row>
        <Row><p>As fotos aqui veiculadas, logotipo e marca não são de propriedade da UNISNEAKERS. A sua reprodução, total ou parcial,
         foi pré autorizada.</p></Row>
        
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

function App() {
  return (
    <div>
      <>
        <Navbar bg="dark" expand={false} className="mb-3">
          <Container  fluid>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="250"
                height="130"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="/products">Produtos</Nav.Link>
                  <Nav.Link href="/register">Cadastro</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className='page-content'/>
        <Main/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
