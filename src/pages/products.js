import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


function Products() {
  return (
    <div style={{ fontSize: "20px" }} >
    <Row>
        <Card.Img variant="top" style={{ width: '6rem', height: '5rem', margin: 'auto'}} src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_brand_Adidas.png"/>  
        <Card.Img variant="top" style={{ width: '6rem', height: '5rem', margin: 'auto'}} src="https://logodownload.org/wp-content/uploads/2019/05/jordan-logo.png"/>
        <Card.Img variant="top" style={{ width: '6rem', height: '5rem', margin: 'auto'}} src="https://logospng.org/download/vans/logo-vans-4096.png"/>
        <Card.Img variant="top" style={{ width: '8rem', height: '5rem', margin: 'auto'}} src="https://logodownload.org/wp-content/uploads/2014/07/puma-logo-1.png"/>
        <Card.Img variant="top" style={{ width: '9rem', height: '5rem', margin: 'auto'}} src="https://logosmarcas.net/wp-content/uploads/2020/04/Nike-Logo.png"/>
    </Row>
    <Row>
      </Row>  
      <Container>
      <Row>
        <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
            <Link to="/trae_unlimited">
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
             <Link to="/doggfather">
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
            <Link to="/ultrarange">
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
            <Link to="/pikachu">
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
            <Link to="/airmax_90">
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
    <Row>
    <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/adifom_q">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/353155-1000-1000/HP658-5-001-1.jpg?v=638120670054400000"/>
             </Link> 
              <Card.Body>
                <Card.Title>ADIDAS ADIFOM Q</Card.Title>
                <Card.Text> R$ 699,99 
                </Card.Text>
                <Card.Text>10x R$ 69,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
          <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/air_jordan_low">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/365548-1000-1000/DV990-9-401-1.jpg?v=638151768386800000"/>
             </Link> 
              <Card.Body>
                <Card.Title>AIR JORDAN XXXVII LOW</Card.Title>
                <Card.Text> R$ 1.699,99 
                </Card.Text>
                <Card.Text>10x R$ 169,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
          <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/sk8_hi">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/352773-1000-1000/7NS44-8-900-1.jpg?v=638110580532000000"/>
             </Link> 
              <Card.Body>
                <Card.Title>VANS SK8-HI X ONE PIECE PUNK HAZARD</Card.Title>
                <Card.Text> R$ 599,99 
                </Card.Text>
                <Card.Text>10x R$ 59,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
          <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/rise_nitro">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/319543-1000-1000/37701-2-002-1.jpg?v=638060180878530000"/>
             </Link> 
              <Card.Body>
                <Card.Title>PUMA RISE NITRO</Card.Title>
                <Card.Text> R$ 749,99 
                </Card.Text>
                <Card.Text>10x R$ 74,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
          <Col>
            <Card style={{ width: '15rem', height: '25rem'}}>
             <Link to="/lebron_nxt">
              <Card.Img variant="top" src="https://artwalk.vteximg.com.br/arquivos/ids/373282-1000-1000/DR878-4-002-1.jpg?v=638164693548130000"/>
             </Link> 
              <Card.Body>
                <Card.Title>NIKE LEBRON NXTT GEN</Card.Title>
                <Card.Text> R$ 1.299,99 
                </Card.Text>
                <Card.Text>10x R$ 129,99</Card.Text>   
              </Card.Body>
            </Card> 
          </Col>
    </Row>
      </Container>
    </div>
  );
}



export default Products;
