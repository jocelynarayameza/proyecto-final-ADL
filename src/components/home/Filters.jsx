import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const Filters = () => {
  const filtersArray = [
    "Figura",
    "Peluche",
    "Pixel Art",
    "Música",
    "Juego físico",
    "Papelería",
    "Vajilla",
    "Accesorios",
    "Ropa",
  ];
  return (
    <div id="filters">
      <Container>
        <Row>
          <Col>
            <h4 id='titleText' className="text-center filterText">Filtros</h4>
          </Col>
        </Row>
        <Row>
          <Col  className=" bg-warning-subtle d-flex flex-column rounded-3" >
            <h4 className=" p-3 categoryText">Categoría</h4>
            <Form>
              {filtersArray.map((filter, index) => (
                <Form.Check
                  className="pb-3"
                  key={index}
                  type="checkbox"
                  id={index}
                  label={filter}
                />
              ))}
            </Form>
            <hr />
            <h4 className=" pt-0 p-3 categoryText">Precio</h4>
            <Form.Group className="px-3">
              <Form.Label >$0 - $100.000 </Form.Label>
              <Form.Range className="custom-range"min="0" max="100000" step="10" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Filters;
