import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../mockproducts.js";
import { Image, Button, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext.jsx";
import { Link } from "react-bootstrap-icons";
const CardDetail = () => {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()

  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(0);
  const increaseQuantity = () => {
    counter < product.cantidad
      ? setCounter(counter + 1)
      : setCounter(counter);
  };
  const decreaseQuantity = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    const products = async () => {
      const data = await getProducts();
      const productFound = data.find((prod) => prod.id === Number(id));
      setProduct(productFound);
    };
    products();
  }, [id]);

  const goback = () =>{
    navigate('/')
  }


  const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.precio)

  return (
    <div id="cardDetail" className="mx-3">
      <Container>
        <h1 id='titleText' className="text-center my-4">Detalle del producto</h1>
        <Row className="justify-content-center my-5">
          <Col className="border border-2 border-danger-subtle rounded-3 p-4">
            <Row className="align-items-center my-4">
              <Col className="text-center pe-4 mb-5" md={6} sm={12}>
                <Image src={product.foto} className="w-75 rounded-3" />
              </Col>
              <Col>

                <h2 className="title-acme">{product.nombre}</h2>
                <h1 className="textPrice pb-2"> {totalCLP} CLP</h1>
                <h4 className="pb-2 textShop">Vendido por: {product.vendedor}</h4>
                <p className="pb-5">Descripción: {product.descripcion}</p>
                <div>
                  <p className="textShop">Cantidad disponible: {product.cantidad}</p>
                  <div className="d-flex align-items-baseline">
                    <Button variant="light" onClick={decreaseQuantity}>
                      -
                    </Button>
                    <p className="px-2">{counter}</p>
                    <Button variant="light" onClick={increaseQuantity}>
                      +
                    </Button>
                  </div>
                </div>
                
                <Col className="">
                   <Button disabled={user.logged ? "":"false"} className="addCartButton mt-3 px-3 mx-2" variant="warning">
                      Agregar al carrito
                    </Button>
                  <Button onClick={goback} className="goDetails mt-3 px-3 mx-2" variant="info">
                    Atras
                  </Button>
                </Col>
        
                </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardDetail;
