import React from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
  return (
    <div className='loginForm'>
      <h1 id='titleText'>Iniciar sesion</h1>
      <div className='yellowColor py-5 my-5'>
        <Container className='whiteColor py-5'>
          <Form className='flexbox'>
            <Form.Group className="mb-3"  controlId="formBasicEmail">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control required className='registerLoginColor' type="email" placeholder="Vivi@tienda.cl" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className='registerLoginColor' type="password" placeholder="Minimo 8 caracteres" />
            </Form.Group>

         
          <div className='registerLoginInput'>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Iniciar sesion</p>
              </Button>
              <a href="">¿Olvidaste tu contraseña?</a>
          </div>

          </Form>
        </Container>
      </div>
    </div>
  )
}

export default Login