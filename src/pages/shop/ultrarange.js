import { Container, Row, Col, Image,} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';


function Ultra(){
    const [numeracao, setNumeracao] = useState({ 
        '34': false,
        '35': false,
        '36': false,
        '37': false,
        '38': false,
        '39': false,
        '40': false,
        '41': false,
        '42': false,
        '43': false,
        '44': false,
        '45': false,
      });
    
      const handleChange = (event) => {
        setNumeracao({
          ...numeracao,
          [event.target.name]: event.target.checked
        });
      }; 
        

    return(
        <>
        <header>
          <Container>
            <Image style={{ width: '4rem', height: '4rem'}} src="https://logospng.org/download/vans/logo-vans-4096.png" />
            <h2 className="text-center">Tênis Vans Ultrarange Rapidweld</h2>
          </Container>
        </header>
        <main>
          <Container>
            <Row>
              <Col md={7}>
                <Image  style={{ width: '30rem', height: '30rem'}} src="https://artwalk.vteximg.com.br/arquivos/ids/228060-1000-1000/Tenis-Vans-Ultrarange-Rapidweld-Preto.jpg?v=637408864298500000" />
              </Col>
              <Col md={5}>
                <p>ㅤ</p>
                <p>ㅤ</p>
                <p>ㅤ</p>
                <h1>R$ 549,99</h1>
                <h4>em até 10x de R$54,99</h4>  
                <p>ㅤ</p>
                <p>ㅤ</p>
                <p>ㅤ</p>
                <h5>Escolha o Tamanho</h5>
                
      {Object.keys(numeracao).map((num) => (
        <label key={num} style={{ width: '6rem', height: '2rem'}}  >
          <input
            style={{ width: '3rem', height: '2rem', fontSize: '50px' }}
            type="checkbox"
            name={num} 
            checked={numeracao[num]} 
            onChange={handleChange}
          />
          {num}
        </label>
      ))}  
                <p>ㅤ</p>
                <Button variant="dark" type="submit" style={{ width: '20rem', height: '5rem'}}
                onClick={() => alert("A Unisneakers agradece seu pedido. Em breve você receberá atualizações deste pedido por e-mail.")}>
                <h2>Comprar</h2></Button>
                <p>ㅤ</p>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Calcular frete</Form.Label>
                        <Form.Control type="name" placeholder="Digite seu CEP" />
                    </Form.Group>
                </Form>
                <Button variant="dark" type="submit" style={{ width: '5rem', height: '2rem',}}
                onClick={() => alert("Em sua região o frete é gratis!!!.")}>
                <h2 style={{fontSize: '15px'}}>Calcular</h2></Button>
              </Col>
            </Row>
          </Container>
        </main>
      </>
    
        );
    }
    export default Ultra;