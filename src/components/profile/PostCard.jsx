import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
const PostCard = ({ nombre, descripcion, foto, id }) => {
  const navigate = useNavigate();
  const edit = (idProduct) => {
    navigate(`/perfil/mis-productos/${idProduct}`);
  };

  const {user} = useContext(UserContext)

  const handleDelete = (id) => {

    const confirm = window.confirm("¿Estás seguro de eliminar este producto?");
    if(!confirm) return;
    if (confirm) {
      try {
        axios.delete(
          `http://localhost:3001/api/mis-productos/${id}`,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        alert("Producto eliminado con id: ", id);
        navigate("/perfil/mis-productos");
      } catch (error) {
        console.log(error)
      } 
    }
  };

  return (
    <Container>
      <Row className="border border-danger-subtle cardMyProducts rounded-3 border-2">
        <Col
          sm={12}
          md={3}
          className="p-2 d-flex justify-content-center align-items-center"
        >
          <img src={foto} alt="" className="imgMyProducts" />
        </Col>
        <Col sm={12} md={6} className="p-2">
          <div>
            <div className="p-2">
              <h4 className="title-acme">{nombre}</h4>
            </div>
            <div div className="p-2">
              {descripcion}
            </div>
          </div>
        </Col>
        <Col sm={12} md={2} className="my-auto">
          <Button div className="m-2 addCartButton" onClick={() => edit(id)}>
            Editar
          </Button>
          <Button
            div
            className="m-2 btn-danger"
            onClick={() => handleDelete(id)}
          >
            Eliminar
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCard;
