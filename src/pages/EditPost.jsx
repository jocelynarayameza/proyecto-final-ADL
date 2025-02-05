import React from "react";
import { obtenerProductos } from "../mockproducts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "react-bootstrap";
import MenuProfile from "../components/profile/MenuProfile";

const EditPost = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productos = async () => {
      const data = await obtenerProductos();
      const productoEncontrado = data.find((prod) => prod.id === Number(id));
      setProducto(productoEncontrado);
    };
    productos();
  }, [id]);

 
  return (
    <div>
<MenuProfile />
    <div className="d-flex flex-column justify-content-center align-items-center">

      <Container className="m-4">
        <Row className="m-3 d-flex justify-content-center">
          <Col>
            <h2 className="title-acme">Editar producto</h2>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col md={12} lg={6} className="px-5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  className="editPostColor"
                  type="text"
                  placeholder={producto.nombre}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Foto URL</Form.Label>
                <Form.Control
                  className="editPostColor"
                  type="text"
                  placeholder={producto.foto}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Categoría</Form.Label>

                <Form.Select
                  className="editPostColor"
                  type="text"
                  placeholder="Vivi_tienda"
                  disabled
                >
                  <option>{producto.categoria}</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12} lg={6} className="px-5 mb-4">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  className="editPostColor"
                  type="text"
                  placeholder={producto.precio}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control
                  className="editPostColor"
                  type="text"
                  placeholder={producto.cantidad}
                  disabled
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  required
                  className="editPostColor"
                  as="textarea"
                  rows={6}
                  placeholder={producto.descripcion}
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Button className="editButton p-0 " variant="info" type="submit">
              <p className="registerLoginButtonText">Editar</p>
            </Button>
          </Row>
        </Form>
      </Container>
    </div>

    </div>
    
  );
};

export default EditPost;