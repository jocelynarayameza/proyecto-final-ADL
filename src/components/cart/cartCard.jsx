import React from 'react'
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap'
import Minus from '../modifiers/MinusMod';
import Plus from '../modifiers/PlusMod'
import { Trash3 } from 'react-bootstrap-icons';
import moogle from '../../assets/img/moogle.png'


const cartCard = () => {
  return (
    <div id="cartCard" className='mb-3 mx-2 rounded-3'>
      <Container>
        <Row >
          <Col xs={12} sm={6} >
            <Row className="my-1 mx-0 py-2 d-flex justify-content-between align-items-center">
              <Col xs='auto' >
                <img src={moogle} className='imgCart'/>
              </Col>

              <Col xs='auto' className='mx-2 d-flex flex-column align-items-start justify-content-center'>
                <h6 className='cartProductTitle'>Nombre del producto</h6>
                <p className='cartProductShop'>Vendido por:</p>
              </Col>
              </Row>
            </Col>
    

          <Col xs={12} sm={6} className='m-0 p-0  d-flex justify-content-evenly align-items-center'>
            <Row className="">
              <Col  className="m-0 py-1" > <Minus/> </Col>

              <Col  className="m-0  py-1 px-0" >
                <Form.Control className='inputCart px-1' min={0} type="text" placeholder="0"></Form.Control>
              </Col>

              <Col className="m-0 py-1" ><Plus/></Col>
              
              <Col className='px-0 py-1 cartProductPrice pr-3'>$Precio</Col>

              <Col className='mx-3 py-1'>
                <Button className='buttonErase' variant="danger"><Trash3/></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default cartCard