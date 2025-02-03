import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../../assets/hooks/useInput';
import { UserContext } from '../../context/UserContext';

const Address = () => {

  const handleSubmit = (e)=>{
    e.preventdefault()
  }

  return (
    <div className='myAccount'>
      <Container className='whiteColor mb-3'>
        <Row>
          <Col>
            <h1 id='titleProfile' className='my-4'>Mi dirección</h1>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit} >
          <Row>
          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Address
