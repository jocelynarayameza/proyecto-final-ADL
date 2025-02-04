import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../../assets/hooks/useInput';
import { UserContext } from '../../context/UserContext';

const MyAccountForm = () => {
  const name=useInput("");
  const lastName=useInput("");
  const password=useInput("");
  const passwordChange=useInput("");
  const email=useInput("");
  const emailChange=useInput("");


  const {registerUser}=useContext(UserContext)

  
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()


    // if (password.value===passwordConfirm.value && password.value.length>=8){
    //   passConfirmed=true
    // } else if (password.value.length<8) {
    //   alert("Contrasena tiene que tener 8 caracteres minimo")
    // } else{
    //   alert("Contrasenas no son iguales")
    // }
    // if (email.value===emailConfirm.value){
    //   emailConfirmed=true
    // }  else{
    //   alert("Emails no son iguales")
    // }
    
    // if(passConfirmed==true && emailConfirmed==true){
    //   registerUser(
    //     { email: email.value,
    //       password: password.value,
    //       username:username.value,
    //       name: name.value,
    //       lastName: lastName.value,
    //       birthday: birthday.value
    //     })
    // }

    

  }

  return (
    <div className='myAccount'>
      <Container className='whiteColor mb-3'>
        <Row>
          <Col>
            <h1 id='titleProfile' className='my-4'>Mis datos</h1>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col md={12} lg={6} className='px-5'>
              <Form.Group className="mb-3"  controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control className='registerLoginColor' type="text" placeholder="Vivi" {...name} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control className='registerLoginColor' type="text" placeholder="Ornitier" {...lastName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="text" placeholder="Vivi_tienda"/>
              </Form.Group>

              <FormGroup className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="date" placeholder=""/>
              </FormGroup>

     
            </Col>
            <Col md={12} lg={6} className='px-5 mb-4'>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="text" placeholder="**********" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicpasswordChange">
                <Form.Label>Cambiar contraseña</Form.Label>
                <Form.Control  className='registerLoginColor' type="text" placeholder="" {...passwordChange}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmailChange">
                <Form.Label>Cambiar correo electronico</Form.Label>
                <Form.Control className='registerLoginColor' type="email" placeholder="vivi@tienda.cl" {...emailChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row className='registerLoginInput'>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Editar</p>
              </Button>
          </Row>

        </Form>

  </Container>
  </div>
  )
}

export default MyAccountForm
