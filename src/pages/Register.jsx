import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../assets/hooks/useInput';
import { UserContext } from '../context/UserContext';

const Register = () => {
  const name=useInput("");
  const lastName=useInput("");
  const username=useInput("");
  const birthday=useInput("");
  const password=useInput("");
  const passwordConfirm=useInput("");
  const email=useInput("");
  const emailConfirm=useInput("");


  const {registerUser}=useContext(UserContext)

  
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()

    let passConfirmed=false
    let emailConfirmed=false

    if (password.value===passwordConfirm.value && password.value.length>=8){
      passConfirmed=true
    } else if (password.value.length<8) {
      alert("Contrasena tiene que tener 8 caracteres minimo")
    } else{
      alert("Contrasenas no son iguales")
    }
    if (email.value===emailConfirm.value){
      emailConfirmed=true
    }  else{
      alert("Emails no son iguales")
    }
    
    if(passConfirmed==true && emailConfirmed==true){
      registerUser(
        { email: email.value,
          password: password.value,
          username:username.value,
          name: name.value,
          lastName: lastName.value,
          birthday: birthday.value
        })
    }

    

  }

  return (
    <div className='registerForm'>
      <h1 id='titleText'>Registrar nueva cuenta</h1>
      <div className='yellowColor py-5 my-5'>
        <Container className='whiteColor py-5'>
          <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={6} className='px-5'>
              <Form.Group className="mb-3"  controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="Vivi" {...name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control className='registerLoginColor' type="text" placeholder="Ornitier" {...lastName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control  className='registerLoginColor' type="text" placeholder="Vivi_tienda" {...username} />
              </Form.Group>

              <FormGroup className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control className='registerLoginColor' type="date" placeholder="Vivi_tienda" {...birthday} />
              </FormGroup>

     
            </Col>
            <Col xs={12} md={6} className='px-5 mb-4'>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className='registerLoginColor' type="text" placeholder="Minimo 8 caracteres" {...password} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Repite tu contraseña</Form.Label>
                <Form.Control  className='registerLoginColor' type="text" placeholder="" {...passwordConfirm}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" {...email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
                <Form.Label>Repite tu correo electronico</Form.Label>
                <Form.Control  className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" {...emailConfirm} />
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