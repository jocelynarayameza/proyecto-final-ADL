import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const Filters = () => {
  const filtros = [
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

      <Container>
        <Row>
          <Col>
            <h4 className="text-center filterText">Filtros</h4>
          </Col>
        </Row>
        <Row>
          <Col  className=" bg-warning-subtle d-flex flex-column rounded-3" >
            <h4 className="text-center p-3 categoryText">Categoría</h4>
            <Form>
              {filtros.map((filtro, index) => (
                <Form.Check
                  className="pb-3"
                  key={index}
                  type="checkbox"
                  id={index}
                  label={filtro}
                />
              ))}
            </Form>
            <hr />
            <h4 className="text-center pt-0 p-3 categoryText">Precio</h4>
            <Form.Group>
              <Form.Label>$0-100000 </Form.Label>
              <Form.Range min="0" max="100000" step="10" />
            </Form.Group>
          </Col>
        </Row>
      </Container>
  );
};

export default Filters;
