import { useState, useEffect } from "react";
import { getProducts } from "../../mockproducts";
const useFetchProducts = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return products
}

export default useFetchProducts

