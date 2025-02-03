import React from 'react'
import Container from 'react-bootstrap/Container';
import { Person, Shop, BagPlus} from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

const MenuProfile = () => {
  return (
    <div id='menuProfile'>
      <Container className='yellowColor my-2'>
        <Row>
          <Col xs={12} sm={3}>
            <h2 className='pt-2 textProfileTitle'>Mi perfil</h2>
          </Col>
          <Col xs={4} sm={3}>
           <div className='d-flex flex-column align-items-center py-1'>
              <Person size={30}/>
              <a href="" className='textProfile'>Mis datos</a>
            </div>
          </Col>
          <Col xs={4} sm={3} >
            <div className='d-flex flex-column align-items-center py-1'>
              <BagPlus size={30}/>
              <a href="" className='textProfile'>Nueva venta</a>
            </div>
            
          </Col>
          <Col xs={4} sm={3}>
           <div className='d-flex flex-column align-items-center py-1'>
              <Shop size={30}/>
              <a href="" className='textProfile'>Publicaciones</a>
            </div>
          </Col>
        </Row>
      </Container>


  </div>
  )
}

export default MenuProfile
