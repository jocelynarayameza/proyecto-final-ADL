import React, { useContext, useState } from 'react'
import { Col, Container, FloatingLabel, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../../assets/hooks/useInput';
import { UserContext } from '../../context/UserContext';
import { Search } from 'react-bootstrap-icons';

const NewPostForm = () => {
  const product_name=useInput("");
  const product_price=useInput("");
  const product_quantity=useInput("");
  const product_photo=useInput("");
  const product_description=useInput("");
  const category=useInput("");
  const search=useInput("")
  

  const {registerUser}=useContext(UserContext)

  
  
  
  const handleSubmit = (e)=> {
    e.preventDefault()

    

  }


  return (
    <div className='newProduct'>
      <Container>
       <Row>
          <Col>
            <h1 id='titleProfile' className='my-4'>Nuevo producto</h1>
          </Col>
        </Row>
      </Container>


      <Container className='align-items-center mt-1 mb-4'>
        <Form.Label>Buscar producto existente</Form.Label>
        <Form inline onSubmit={handleSubmit} className=''>
          <Row>
            <Col xs={10} sm={9}>
              <Form.Control type="text" placeholder="Figura Zidane FFXIV" className=" mr-sm-2 newPostColor" {...search}/>
            </Col>
            <Col xs={2} sm={3}>
              <Button variant="info" type="submit" className='searchButton'><Search size={20}/></Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Container>
       <hr/>
      </Container>


      <Container className='my-4 '>
        <Form>
          <Row className="mb-3">
            <Col xs={12} sm={5}>
              <Form.Group controlId="formProductName" className='mb-3'>
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control className='newPostColor' type="name" placeholder="Figura Garnet FFXIV" {...product_name}/>
              </Form.Group>
            </Col>
            <Col xs={12} sm={5}>
            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>{"Foto (URL)"}</Form.Label>
                <Form.Control className='newPostColor' placeholder="http://www.foto.com/foto" {...product_photo} />
              </Form.Group>

  
            </Col>
            <Col xs={12} sm={2}>
              <Form.Group as={Col} controlId="formGridPassword" className='mb-3'>
                <Form.Label>{"Precio ($ CLP)"}</Form.Label>
                <Form.Control className='newPostColor' type="price" placeholder="20000" {...product_price} />
              </Form.Group>
    
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={4} className='d-flex flex-column'>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control className='newPostColor' placeholder="3" {...product_quantity} />
              </Form.Group>

              <Form.Group controlId="formCategory" className='mb-3'>
                <Form.Label>Categoria</Form.Label>
                <Form.Select className='newPostColor' {...category}>
                  <option>Seleciona solo 1 categoria de abajo</option>
                  <option>Figura</option>
                  <option>Peluche</option>
                  <option>Pixel art</option>
                  <option>Musica</option>
                  <option>Juego fisico</option>
                  <option>Papeleria</option>
                  <option>Vajilla</option>
                  <option>Accesorios</option>
                  <option>Ropa</option>
                </Form.Select >
              </Form.Group>

            </Col>
            <Col xs={12} sm={8}>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Dimensiones, fabricante, origen, etc."
                  className="mb-3"
                >
                  <Form.Control className='textareaColor' as="textarea" {...product_description}/>
                </FloatingLabel>
              </Form.Group>

            </Col>
          
           </Row>
          
            <Row className='registerLoginInput my-3'>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Publicar nuevo producto</p>
              </Button>
            </Row>
        </Form>
      </Container>
      
  </div>
  )
}

export default NewPostForm
