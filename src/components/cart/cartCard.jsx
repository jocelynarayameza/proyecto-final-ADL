import React from 'react'
import { Button, Card, Col, Container, Row, Form } from 'react-bootstrap'
import Minus from '../modifiers/Minus';
import Plus from '../modifiers/Plus'
import { Trash3 } from 'react-bootstrap-icons';


const cartCard = () => {
  return (
    <div id="cartCard">
      <Container>
        <Row className="my-1 py-2">
          <Col xs={12} sm={2} className=''>
            <img src=''/>
          </Col>

          <Col xs={12} sm={3} className=''>
            <h6>Nombre del producto</h6>
            <p>Vendido por:</p>
          </Col>

          {/* <Col xs={12} sm={1} >
            <Row className="m-0 p-0"> */}
              <Col sm={1} className="m-0" > <Minus/> </Col>

              <Col sm={1} className="m-0  py-1 px-0" >
                <Form.Control className='inputCart' min={0} type="text" placeholder="0"></Form.Control>
              </Col>
              <Col sm={1} className="m-0" ><Plus/></Col>
              
            {/* </Row>
          </Col> */}

          <Col className='p-0' xs={12} sm={2}>$Precio</Col>

          <Col xs={12} sm={1} className='p-0'>
           <Button><Trash3/></Button>
          </Col>


        </Row>
      </Container>

      

    </div>
  )
}

export default cartCard