import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const Filters = ({ filterChange }) => {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);

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

  const handleCategory = (e) => {
    const category = e.target.value;
    setCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    setPriceRange([0, value]);
  };

  useEffect(() => {
    filterChange(categories, priceRange);
  }, [categories, filterChange, priceRange]);

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="text-center filterText">Filtros</h4>
        </Col>
      </Row>
      <Row>
        <Col className=" bg-warning-subtle d-flex flex-column rounded-3">
          <h4 className="text-center p-3 categoryText">Categoría</h4>
          <Form>
            {filtersArray.map((filter, index) => (
              <Form.Check
                className="pb-3"
                key={index}
                type="checkbox"
                id={index}
                label={filter}
                value={filter}
                onChange={handleCategory}
                checked={categories.includes(filter)}
              />
            ))}
          </Form>
          <hr />
          <h4 className="text-center pt-0 p-3 categoryText">Precio</h4>
          <Form.Group>
            <Form.Label>$0 - {priceRange[1]}</Form.Label>
            <Form.Range
              min="0"
              max="200000"
              step="10"
              value={priceRange[1]}
              onChange={handlePrice}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
