import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ nombre, precio, foto, id }) => {

  const navigate = useNavigate();
  const details = (idProduct) => {
    navigate(`/producto/${idProduct}`);
  }
  return (
    <Card style={{ width: "16rem" }} className="m-5 p-3 border border-danger-subtle">
      <Card.Img variant="top" src= {foto} className="img img-fluid"/>
      <Card.Body>
        <Card.Title className="title-acme">{nombre}</Card.Title>
        <Card.Text>
          ${precio}
        </Card.Text>
        <Button variant="warning" className="mb-2" onClick={() => details(id)}>Ver detalles</Button>
        <Button className="addCartButton" >Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
