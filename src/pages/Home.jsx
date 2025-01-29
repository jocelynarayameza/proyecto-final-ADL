import React from "react";
import { useEffect, useState } from "react";
import { obtenerProductos } from "../mockproducts";
import ProductContainer from "../components/home/ProductContainer";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return (
    <>
      <ProductContainer productos= {productos} />
    </>
  );
};

export default Home;
