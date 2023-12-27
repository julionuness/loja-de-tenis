import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <Container>
        <Row><h2>Cadastro</h2></Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="name" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="nome@exemplo.com" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contato</Form.Label>
              <Form.Control type="contato" placeholder="+55 (12) 11234-1234" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="Endereço" placeholder="Rua Getulio Vargas, 101, Apartamento/Casa"/>
            </Form.Group>
            <Link to="/products">
              <Button variant="dark" type="submit">Cadastrar</Button>
            </Link>
          </Form>
        </Row>
      </Container>

    </div>
  );
}
  
  export default Register;
  