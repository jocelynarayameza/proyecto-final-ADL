import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrdersList = ({ order }) => {

  const navigate = useNavigate();
  const orderDetails = (idOrder) => {
    navigate(`/perfil/pedidos-anteriores/${idOrder}`);
  }

  return (
    <div>
      <Container>
        <Row className="border border-danger-subtle m-4 rounded-3">
          <Col sm={12} md={4} className="p-2">
            <div>
              <div className="p-2 d-flex gap-3">
                <h3 className="title-acme ">Id de compra:</h3>
                <h3 className="title-acme">{order.id_compra}</h3>
              </div>
              <div className="p-2 d-flex gap-3">
                <h5 className="title-acme">Total pagado: ${order.total}</h5>
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} className="p-2">
          <h3 className="title-acme p-2">Productos:</h3>
            {order.productos_comprados.map((producto, index) => (
              <p key={index} className="ps-2">{producto.nombre} x {producto.cantidad}</p>
            ))}
          </Col>
          <Col sm={12} md={3} className="my-auto d-flex flex-column gap-2">
            <Button className=" addCartButton" onClick={() => orderDetails(order.id_compra)} >
              Ver más
            </Button>
            <Button className="orderListButton">
              Pedir nuevamente
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrdersList;
