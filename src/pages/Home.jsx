import React from "react";
import ProductContainer from "../components/home/ProductContainer";
import useFetchProducts from "../assets/hooks/useFetchProducts";

const Home = () => {
  const productos = useFetchProducts();
  return (
    <>
      <ProductContainer productos= {productos} />
    </>
  );
};

export default Home;

