import React from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import { Container, Row, Col, Form } from "react-bootstrap";

const ProductContainer = ({ productos }) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="col-2">
            <Filters />
          </Col>
          <Col className="col-10">
            <Row className="justify-content-center">
              <div className="d-flex gap-5 w-50">
                <Form.Select aria-label="Default select example">
                  <option>Ordenar por</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control size="sm" type="text" placeholder="Buscar" />
              </div>
            </Row>
            <Col className="d-flex flex-wrap justify-content-around m-3">
              {productos.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductContainer;
