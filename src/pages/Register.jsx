import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../assets/hooks/useInput';
import { UserContext } from '../context/UserContext';

const Register = () => {
  const name=useInput("");
  const lastname=useInput("");
  const username=useInput("");
  const birthday=useInput("");
  const password=useInput("");
  const password_confirm=useInput("");
  const email=useInput("");
  const email_confirm=useInput("");


  const {registerUser}=useContext(UserContext)

  
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()

    let passConfirmed=false
    let emailConfirmed=false

    if (password.value===password_confirm.value && password.value.length>=8){
      passConfirmed=true
    } else if (password.value.length<8) {
      alert("Contrasena tiene que tener 8 caracteres minimo")
    } else{
      alert("Contrasenas no son iguales")
    }
    if (email.value===email_confirm.value){
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
          lastname: lastname.value,
          birthday: birthday.value
        })
    }

    

  }

  return (
    <div className='registerForm flexbox'>
      <h1 id='titleText'>Registrar nueva cuenta</h1>
      <div className='yellowColor py-5 my-5 '>
        <Container className='whiteColor py-5 '>
          <Form onSubmit={handleSubmit} >
          <Row>
            <Col md={12} lg={6} className='px-5'>
              <Form.Group className="mb-3"  controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="Vivi" {...name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="Ornitier" {...lastname} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="Vivi_tienda" {...username} />
              </Form.Group>

              <FormGroup className="mb-3" controlId="formBirthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control required className='registerLoginColor' type="date" placeholder="Vivi_tienda" {...birthday} />
              </FormGroup>

     
            </Col>
            <Col md={12} lg={6} className='px-5 mb-4'>
             <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="Minimo 8 caracteres" {...password} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPasswordConfirm">
                <Form.Label>Repite tu contraseña</Form.Label>
                <Form.Control required className='registerLoginColor' type="text" placeholder="" {...password_confirm}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control required className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" {...email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmailConfirm">
                <Form.Label>Repite tu correo electronico</Form.Label>
                <Form.Control required className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" {...email_confirm} />
              </Form.Group>
            </Col>
          </Row>

          <Row className='registerLoginInput'>
            <Form.Group className="mb-3" controlId="formCheckbox">
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