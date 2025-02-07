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
          <h2 className="title-acme">Detalle pedido anterior</h2>
          <h3 className="title-acme">Id de compra: {order.id_compra} </h3>
        </Col>
      </Row>
      <Row className="cardMyProducts">
        <Col className="p-2 border border-danger-subtle rounded-3 " md={8}>
          {order.productos_comprados
            ? order.productos_comprados.map((producto, index) => (
                <div key={index} className="d-flex justify-content-around">
                  <img src={producto.foto} alt="" className="imgMyProducts" />

                  <div className=" align-content-center ">
                    <p>
                      {producto.nombre} x {producto.cantidad}
                    </p>
                    <p>Vendido por: {producto.vendedor}</p>
                  </div>

                  <div className=" align-content-center ">
                    <p>Precio unitario</p>
                    <p>${producto.precio}</p>
                  </div>
                </div>
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
