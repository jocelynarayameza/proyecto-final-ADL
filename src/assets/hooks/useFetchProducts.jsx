import { useState, useEffect } from "react";
import { obtenerProductos } from "../../mockproducts";
const useFetchProducts = () => {
    const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  return productos
}

export default useFetchProducts

