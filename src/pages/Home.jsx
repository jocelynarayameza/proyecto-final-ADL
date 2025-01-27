import React from "react";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../mockproducts";

const Home = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const productos = await obtenerProductos();
      setProducto(productos);
    };
    fetchProductos();
  }, []);

  return (
    <>
      <h1>Productos</h1>
      <ul>
        {producto.map((prod) => (
          <div key={prod.id}>
            <h2>{prod.nombre}</h2> <h3>{prod.precio}</h3>
            {prod.foto}
          </div>
        ))}
      </ul>
    </>
  );
};

export default Home;
