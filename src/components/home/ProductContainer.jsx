import React from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import PaginationComponent from "./Pagination";
import { Container, Row, Col, Form, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

const ProductContainer = ({ productos }) => {

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Container fluid className="mt-4">
      <Row className="ms-2">
        <Col className="d-md-none mb-3 text-center">
          <Button variant="warning" onClick={() => setShowFilters(true)}>
            Filtrar
          </Button>
        </Col>

        <Offcanvas show={showFilters} onHide={() => setShowFilters(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtros</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Filters />
          </Offcanvas.Body>
        </Offcanvas>
          <Col  lg={2} md={3} className="d-none d-md-block">
            <Filters />
          </Col>
          <Col lg={10} md={9}>
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
            <Col className="d-flex justify-content-center m-4">
            <PaginationComponent productos={productos} />
            </Col>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default ProductContainer;
