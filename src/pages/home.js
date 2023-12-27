import Carousel from 'react-bootstrap/Carousel';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col> </Col>
          <Col> 
            <Carousel style={{ width: "1200px", height: "600px", alignSelf: 'center',}}>
              <Carousel.Item>
              <Link to="/products">
                <img
                  className="d-block w-100"
                  src="https://artwalk.vteximg.com.br/arquivos/ids/367424/NIKE-AIR-MAX-DESK.jpg?v=638155232765870000"
                  alt="First slide"
                  height="450"
                />
                </Link>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Link to="/products">
                <img
                  className="d-block w-100"
                  src="https://artwalk.vteximg.com.br/arquivos/ids/372306/Banner_PumaSportstyle_Artwalk_1400x610px.jpg?v=638162114709600000"
                  alt="Second slide"
                  height="450"
                />
                </Link>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Link to="/products">
                <img
                  className="d-block w-100"
                src="https://authenticfeet.vteximg.com.br/arquivos/ids/306341/2690%20-%20AF%20%20BANNER%20-%20DESKTOP%202.png?v=638158870421000000"
                  alt="Third slide"
                  height="450"
                />
                </Link>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Col md={6} style={{alignSelf: 'center'}}>
      <h2>Destaques da Semana</h2>          
      </Col>
      <Row>
        <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/register">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/372320-380-380/DO718-9-002-1.jpg?v=638162982467000000"/>
             </Link> 
              <Card.Body>
                <Card.Title>JORDAN DOGGFATHER</Card.Title>
                <Card.Text> R$ 999,99 
                </Card.Text>
                <Card.Text>10x R$ 99,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
            <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
            <Link to="/register">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/363777-380-380/HQ102-0-001-1.jpg?v=638146736611600000"/>
            </Link>
              <Card.Body>
                <Card.Title>ADIDAS TRAE UNLIMITED</Card.Title>
                <Card.Text> R$ 799,99 
                </Card.Text>
                <Card.Text>10x R$ 79,99</Card.Text>   
              </Card.Body>
            </Card> 
      </Col>
      <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
            <Link to="/register">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/228060-380-380/Tenis-Vans-Ultrarange-Rapidweld-Preto.jpg?v=637408864298500000"/>
              </Link>
              <Card.Body>
                <Card.Title>VANS ULTRARANGE RAPIDWELD </Card.Title>
                <Card.Text> R$ 549,99 
                </Card.Text>
                <Card.Text>10x R$ 54,99
                </Card.Text>    
              </Card.Body>
            </Card>          
      </Col>
      <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
            <Link to="/register">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/351924-380-380/38954-1-001-1.jpg?v=638101762769170000"/>
              </Link>
              <Card.Body>
                <Card.Title>PUMA RS-X PIKACHU</Card.Title>
                <Card.Text> R$ 849,99 
                </Card.Text>
                <Card.Text>10x R$ 84,99
                </Card.Text>    
              </Card.Body>
            </Card>          
      </Col>
      <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
            <Link to="/register">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/363021-380-380/FD082-1-100-1.jpg?v=638144880475830000"/>
              </Link>
              <Card.Body>
                <Card.Title>NIKE AIR MAX 90 FUTURA</Card.Title>
                <Card.Text> R$ 1.099,99 
                </Card.Text>
                <Card.Text>10x R$ 109,99
                </Card.Text>    
              </Card.Body>
            </Card>          
      </Col>
    </Row>
    </div>
  );
}

export default Home;
