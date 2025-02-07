import React from "react";
import ProductContainer from "../components/home/ProductContainer";
import useFetchProducts from "../assets/hooks/useFetchProducts";

const Home = () => {
  const products = useFetchProducts();
  return (
    <>
      <ProductContainer products= {products} />
    </>
  );
};

export default Home;

