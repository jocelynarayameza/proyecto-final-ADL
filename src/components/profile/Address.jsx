import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../../assets/hooks/useInput';
import { UserContext } from '../../context/UserContext';

const Address = () => {
  const adress=useInput("")
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
            <Col>
              <Form.Group className="mb-3"  controlId="formBasicAdress">
               <Form.Label>Direccion actual</Form.Label>
               <Form.Control className='registerLoginColor' type="text" placeholder="Calle 8, Lindblum, Gaia" {...adress} />
              </Form.Group>
            </Col>
            <Col>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Editar</p>
              </Button>
            </Col>

          </Row>
        </Form>
      </Container>
    </div>
  )
}

export default Address
