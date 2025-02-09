import React from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import PaginationComponent from "./Pagination";
import { Container, Row, Col, Form, Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { Funnel, Search } from "react-bootstrap-icons";

const ProductContainer = ({ products }) => {

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
    <Container>
      <Row className="ms-2">
        <Col xs={12} sm={12} md={6} >
          <Form.Group className="d-flex mb-2">
            <Form.Control className="searchOrderBy" size="md" type="text" placeholder="Buscar" />
            <Button variant="outline-success border-2"><Search size={20}/></Button>
          </Form.Group>
        </Col>

        <Col xs={6} className="mb-2">
          <Form.Select size="md" className="searchOrderBy" aria-label="Default select example">
            <option>Ordenar por</option>
            <option value="1">Menor a mayor precio</option>
            <option value="2">Mayor a menor precio</option>
          </Form.Select>
        </Col>

        <Col xs={6} className="d-md-none text-center pb-0 mb-2">
          <Button variant="outline-success" className="buttonFiltersSmall d-flex" onClick={() => setShowFilters(true)}>
            <p className="mb-0"> Filtros</p>
            <Funnel size={20}/>
          </Button>
        </Col>

        <Offcanvas show={showFilters} onHide={() => setShowFilters(false)}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Filters />
          </Offcanvas.Body>
        </Offcanvas>
        </Row>
      </Container>
      <Container fluid>
         <Col className="d-flex flex-wrap justify-content-around">
            {products.map((prod) => (
              <ProductCard key={prod.id} {...prod} />
            ))}
          </Col>

        <Col className="d-flex justify-content-center m-4">
          <PaginationComponent productos={products} />
        </Col>
      </Container>
    </>
  );
};

export default ProductContainer;
