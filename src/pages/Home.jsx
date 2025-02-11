import React, { useEffect, useState } from "react";
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
          <ProductContainer products= {products} />
      </Row>
    </Container>

    </>
  );
};

export default Home;

