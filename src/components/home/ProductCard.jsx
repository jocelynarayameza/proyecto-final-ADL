import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProductCard = ({ nombre, precio, foto, id }) => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate();
  const details = (idProduct) => {
    navigate(`/producto/${idProduct}`);
  }
  return (
    <Card style={{ width: "16rem" }} className="m-5 p-3 border-2 border border-danger-subtle">
      <Card.Img variant="top" src= {foto} className="img img-fluid"  />
      <Card.Body>
        <Card.Title className="title-acme">{nombre}</Card.Title>
        <Card.Text>
          ${precio}
        </Card.Text>
        <Button variant="info" className="mb-2 goDetails px-4" onClick={() => details(id)}>Ver detalles</Button>
        <Button disabled={user.logged ? "":"false"} variant="warning" className="addCartButton" >Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
