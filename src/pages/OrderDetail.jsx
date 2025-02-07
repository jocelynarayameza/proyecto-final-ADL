import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrders } from "../mockOrders";
import { Container, Row, Col } from "react-bootstrap";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      const orderFound = data.find((o) => o.id_compra === Number(id));
      setOrder(orderFound);
      console.log(orderFound);
    };
    fetchOrders();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="title-acme m-3 py-4">Detalle pedido anterior</h2>
          <h3 className="title-acme m-3">Id de compra: {order.id_compra} </h3>
        </Col>
      </Row>
      <Row className="cardMyProducts mb-5">
        <Col md={8}>
          {order.productos_comprados
            ? order.productos_comprados.map((producto, index) => (
              <Row key={index} className="p-2 border border-danger-subtle rounded-3 mb-2">
              <Col sm={12} md={4} className="d-flex align-items-center justify-content-center">
                <img src={producto.foto} alt={producto.nombre} className="imgMyProducts" />
              </Col>
    
              <Col sm={12} md={5} className="d-flex flex-column justify-content-center align-items-center">
                <h4 className="title-acme">
                  <strong >{producto.nombre}</strong> 
                </h4>
                <h5>Cantidad: {producto.cantidad}</h5>
                <p>Vendido por: {producto.vendedor}</p>
              </Col>
    
              <Col sm={12} md={3} className="d-flex flex-column justify-content-center text-center">
                <h4><strong>Precio unitario</strong></h4>
                <p>${producto.precio}</p>
              </Col>
            </Row>
              ))
            : "No hay productos"}
        </Col>

        <Col md={4}>
          <div>Resumen de compra</div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetail;
