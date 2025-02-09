import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PostCard = ({ nombre, descripcion, foto, id }) => {
   const navigate = useNavigate();
    const edit = (idProduct) => {
      navigate(`/perfil/mis-productos/${idProduct}`);
    }
    //CREAR FUNCION PARA BORRAR

  return (
    <Container>
      <Row className="cardMyProducts rounded-3 my-3 py-2 px-2 border-2">
        <Col sm={12} md={3} className=" d-flex justify-content-center align-items-center pt-2">
          <img src={foto} alt="" className="imgMyProducts rounded-3" />
        </Col>
        <Col sm={12} md={6} className="p-2">
          <div >
            <div className="p-2">
              <h4 className="title-acme">
              {nombre}
              </h4>
          
              </div>
              <div div className="p-2">
              {descripcion}
              </div>
          </div>
        </Col>
        <Col sm={12} md={2} className="my-auto">
          <Button div className="m-2 editProductsButton" variant="warning" onClick={() => edit(id)}>Editar</Button>
          <Button div className="m-2 buttonErase" variant="danger">Eliminar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCard;
