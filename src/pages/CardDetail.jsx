import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductos } from "../mockproducts.js";
import { Image, Button } from "react-bootstrap";
const CardDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [contador, setContador] = useState(0);
  const aumentarCantidad = () => {
    contador < producto.cantidad ? setContador(contador + 1) : setContador(contador); 
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
      <h1 className="title-acme text-center my-4">Detalle del producto</h1>
      <div className="border border-danger-subtle w-75 m-auto my-5">
        <div className="d-flex justify-content-evenly my-4 ">
          <Image src={producto.foto} className="w-25"  />
          <div>
            <h2 className="title-acme">{producto.nombre}</h2>
            <h1 className="text-info pb-2">Precio: ${producto.precio}</h1>
            <h4 className="pb-2">Vendido por: {producto.vendedor}</h4>
            <p className="pb-5">Descripción: {producto.descripcion}</p>
            <div>
              <p>Cantidad disponible: {producto.cantidad}</p>
              <div className="d-flex align-items-baseline">
                <Button variant="light" onClick={disminuirCantidad}>-</Button>
                <p className="px-2">{contador}</p>
                <Button variant="light" onClick={aumentarCantidad}>+</Button>
              </div>
              <Button variant="warning">Añadir al carrito</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
