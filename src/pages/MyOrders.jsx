import React from "react";
import MenuProfile from "../components/profile/MenuProfile";
import { Container, Row, Col } from "react-bootstrap";
import OrdersList from "../components/profile/OrdersList";
import { useEffect, useState } from "react";
import { getOrders } from "../mockOrders";
const MyOrders = () => {

  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    }
    fetchOrders();
  },[])

  return (
    <div>
      <MenuProfile />
      <Container className=" mx-auto">
        <Row className="m-3 d-flex justify-content-center">
          <Col>
            <h2 id='titleProfile' className="my-2">Pedidos anteriores</h2>
          </Col>
        </Row>
        <Row className="m-3 d-flex justify-content-center">
          <Col>
            {orders.map((order) => (
              <OrdersList key={order.id_compra} order={order} />
            ))} 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrders;
