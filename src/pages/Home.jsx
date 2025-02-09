import React from "react";
import ProductContainer from "../components/home/ProductContainer";
import useFetchProducts from "../assets/hooks/useFetchProducts";
import { Col, Container, Row } from "react-bootstrap";
import Filters from "../components/home/Filters";

const Home = () => {
  const products = useFetchProducts();
  return (
    <>
    <Container fluid className="mt-4">
      <Row>
        <Col md={4} lg={3} xl={2} className="d-none d-md-block">
          <Filters />
        </Col>
        <Col md={8} lg={9} xl={10}>
          <ProductContainer products= {products} />
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default Home;

