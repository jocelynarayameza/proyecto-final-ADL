import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = ({ nombre, precio, foto }) => {
  return (
    <Card style={{ width: "16rem" }} className="m-5 p-3 border border-danger-subtle">
      <Card.Img variant="top" src={foto} className="card img-fluid"/>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          ${precio}
        </Card.Text>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
