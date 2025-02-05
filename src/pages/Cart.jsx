import React from 'react'
import CartCard from '../components/cart/CartCard'
import CartOrder from '../components/cart/CartOrder'
import { Col, Container, Row } from 'react-bootstrap'

const Cart = () => {
  return (
    <div>
       <h1 id='titleText'>Mi carrito</h1>
       <Container>
        <Row>
          <Col xs={12} sm={9} className='p-0'>
           <CartCard/>
          </Col>
          <Col xs={12} sm={3} className='p-0'>
          <CartOrder/>
          </Col>
        </Row>
       </Container>
      
    </div>
  )
}

export default Cart