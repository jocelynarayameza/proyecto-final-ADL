import React from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {



  return (
    <div className='registerForm'>
      <h1 id='titleText'>Registrar nueva cuenta</h1>
      <div className='yellowColor py-5 my-5'>
        <Container className='whiteColor py-5'>
          <Form>
          <Row>
            <Col xs={12} md={6} className='px-5'>
              <Form.Group className="mb-3"  controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required className='registerLoginColor' type="name" placeholder="Vivi" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control className='registerLoginColor' type="lastName" placeholder="Ornitier" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control  className='registerLoginColor' type="username" placeholder="Vivi_tienda" />
              </Form.Group>

              <FormGroup className="mb-3" controlId="formBasicDate">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control className='registerLoginColor' type="date" placeholder="Vivi_tienda" />
              </FormGroup>

     
            </Col>
            <Col xs={12} md={6} className='px-5 mb-4'>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className='registerLoginColor' type="email" placeholder="Minimo 8 caracteres" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Repite tu contraseña</Form.Label>
                <Form.Control  className='registerLoginColor' type="email" placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                <Form.Label>Repite tu correo electronico</Form.Label>
                <Form.Control  className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" />
              </Form.Group>
            </Col>
          </Row>

          <Row className='registerLoginInput'>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check  className='registerLoginInput2' type="checkbox" label="Aceptas los terminos de contrato" />
            </Form.Group>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Registrarse</p>
              </Button>
          </Row>

          </Form>
        </Container>
      </div>
    </div>
  )
}

export default Register