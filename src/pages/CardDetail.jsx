import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../mockproducts.js";
import { Image, Button, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext.jsx";
const CardDetail = () => {
  const {user} = useContext(UserContext)

  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [contador, setContador] = useState(0);
  const aumentarCantidad = () => {
    contador < producto.cantidad
      ? setContador(contador + 1)
      : setContador(contador);
  };
  const disminuirCantidad = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    const productos = async () => {
      const data = await obtenerProductos();
      const productoEncontrado = data.find((prod) => prod.id === Number(id));
      setProducto(productoEncontrado);
    };
    productos();
  }, [id]);

  return (
    <>
      <Container>
        <h1 className="title-acme text-center my-4">Detalle del producto</h1>
        <Row className="justify-content-center my-5">
          <Col className="border border-danger-subtle p-4">
            <Row className="align-items-center my-4">
              <Col className="text-center pe-4 mb-5" md={6} sm={12}>
                <Image src={producto.foto} className="w-75" />
              </Col>
              <Col>
                <h2 className="title-acme">{producto.nombre}</h2>
                <h1 className="textPrice pb-2"> ${producto.precio} CLP</h1>
                <h4 className="pb-2 textShop">Vendido por: {producto.vendedor}</h4>
                <p className="pb-5">Descripción: {producto.descripcion}</p>
                <div>
                  <p>Cantidad disponible: {producto.cantidad}</p>
                  <div className="d-flex align-items-baseline">
                    <Button variant="light" onClick={disminuirCantidad}>
                      -
                    </Button>
                    <p className="px-2">{contador}</p>
                    <Button variant="light" onClick={aumentarCantidad}>
                      +
                    </Button>
                  </div>
                  <Button disabled={user.logged ? "":"false"} className="addCartButton mt-3 px-4" variant="warning">
                    Agregar al carrito
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CardDetail;
