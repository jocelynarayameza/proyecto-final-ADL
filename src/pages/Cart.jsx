import React from 'react'
import CartCard from '../components/cart/CartCard'
import CartOrder from '../components/cart/CartOrder'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Cart = () => {
  return (
    <div>
       <h1 id='titleText'>Mi carrito</h1>
       <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={8} className='p-0'>
           <CartCard/>
           <Button variant='danger' className='buttonErase ms-2 my-3'>Vaciar el carrito</Button>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className='p-0'>
          <CartOrder/>
          </Col>
        </Row>

       </Container>
      
    </div>
  )
}

export default Cart