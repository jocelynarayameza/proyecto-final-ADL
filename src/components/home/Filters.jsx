import React from "react";
import Form from "react-bootstrap/Form";

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
    <>
      <h4 className="text-center">Filtros</h4>
      <div className=" bg-warning-subtle p-3 m-3">
        <h4>Categoría</h4>
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
        <hr />o
        <Form.Group>
          <Form.Label>$0-100 </Form.Label>
          <Form.Range min="0" max="1000" step="10" />
        </Form.Group>
      </div>
    </>
  );
};

export default Filters;
