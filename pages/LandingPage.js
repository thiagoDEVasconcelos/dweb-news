import React from "react";

import {
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import { IoMdPerson } from "react-icons/io";

import Logo from "../assets/newspaper-folded.png";

const LandingPage = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg" className="px-3">
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={Logo}
              alt="Logo"
              className="me-2"
              style={{ width: "40px" }}
            />
            <h1 className="fs-4 m-0">DWEB BRASIL</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#"><IoMdPerson size="2em" />Nome Usuário</Nav.Link>
              <Button onClick={() => navigate('/login')} className="btn-dark ms-4" style={{ borderRadius: '12px' }}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <main className="container my-4">
        <section className="text-center mb-4">
          <h2>
            Zelensky diz que a posição de Lula em relação à guerra é fraca
          </h2>
          <p>Ucrânia estuda destroços de novo míssil balístico russo.</p>
          <a href="https://www.cnnbrasil.com.br/internacional/zelensky-diz-a-cnn-que-a-posicao-de-lula-em-relacao-a-guerra-e-fraca/" target="_blank" rel="noreferrer"><Button variant="primary btn-dark">Saiba Mais</Button></a>
        </section>

        <section>
          <h1 className="mb-4">Mais Notícias</h1>
          <Row className="g-4">
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/garro-corinthians-vasco.jpg-e1732478041884.jpg?w=306&h=182&crop=1"
                  alt="Notícia 1"
                />
                <Card.Body>
                  <Card.Title>
                    Corinthians resolve cedo, bate o Vasco e chega à sexta
                    vitória no Brasileirão
                  </Card.Title>
                  <Card.Text>
                    Inter goleia o Bragantino, que se complica na luta contra o
                    rebaixamento.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/11/img_2436-e1732311225751.jpg?w=306&h=182&crop=1"
                  alt="Notícia 2"
                />
                <Card.Body>
                  <Card.Title>
                    Data do próximo aniversário de Bolsonaro é determinante para
                    ele não perder benefício
                  </Card.Title>
                  <Card.Text>
                    Bolsonaro indiciado: veja quem decretaria eventual prisão.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/09/palacio_planalto_01.jpg?w=306&h=182&crop=1"
                  alt="Notícia 3"
                />
                <Card.Body>
                  <Card.Title>
                    Governo deve enviar proposta para bloqueio de emendas com
                    corte de gastos
                  </Card.Title>
                  <Card.Text>
                    Após negociações com a Fazenda, Câmara retoma a PEC das
                    Igrejas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </main>

     
    </div>
  );
};

export default LandingPage;

LandingPage.js