import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/moogle.png'
import { Facebook,Instagram, TwitterX, PinMapFill, EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <footer className='footer skyBlue'>
      <Container>
        <Row className=" d-flex justify-content-between">
          <Col className='mt-1 d-flex justify-content-between' xs={12} md={3} >
            {/* <Row className="">
              <Col xs="auto"> */}
               <img className="mt-3 mb-0" src={logo} width="200" height="200" alt="logo footer moogle"/>
              {/* </Col>
              <Col xs="auto"> */}
                <p className='titleConfig'>Final Fantasy Marketplace</p>
              {/* </Col>
            </Row> */}
          </Col>
        
          <Col className='mt-4' xs={12} md={3}>
            <Row>
              <Col xs={6} sm={5}>
                <h5>¡Visitanos!</h5>
                <Row xs="auto">
                  <Col >
                    <Facebook size={25}/>
                  </Col>
                  <Col >
                    <p>Facebook</p>
                  </Col>
                </Row>
                <Row xs="auto">
                  <Col>
                    <Instagram size={25}/>
                  </Col>
                  <Col>
                    <p>Instagram</p>
                  </Col>
                </Row>
                <Row xs="auto">
                  <Col>
                    <TwitterX size={25}/>
                  </Col>
                  <Col>
                    <p>Twitter/X</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={6} md={6}>
            <h5>¡Contáctanos!</h5>
            <Row xs="auto">
              <Col xs={1} className='me-2'>
                <TelephoneFill size={25}/>
              </Col>
              <Col xs="auto">
                <p>+56 9 1111 1111</p>
              </Col>
            </Row>
            <Row xs="auto">
              <Col xs={1} className='me-2'>
                <EnvelopeFill size={25}/>
              </Col>
              <Col>
                <p>ff_market@gmail.com</p>
              </Col>
            </Row>

            <Row xs="auto">
              <Col xs={1} className='me-2'>
                <PinMapFill size={25}/>
              </Col>
              <Col xs="auto">
              <p>Calle 8, Lindblum, Gaia</p>
              </Col>
            </Row>
          </Col>

          <Row >
            <Col className='footer-text'>
             <p >Todos los derechos reservados. FF Market 2025 ©</p>
            </Col>
          </Row>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer