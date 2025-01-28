import { Container, Row, Col } from 'react-bootstrap';


const Header = () => {
  return (
    <div id='header'>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <div className='box'>
              <h1>Final Fantasy Marketplace</h1>
              <p>El mejor lugar para que puedas vender tu merchandising de todos los Final Fantasy</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Header