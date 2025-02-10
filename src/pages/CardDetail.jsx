import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Image, Button, Col, Row, Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext.jsx";

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

    const product = async () => {
      try {
      const id_params = Number(id)
      const productFound = await axios.get(`http://localhost:3001/api/productos/${id_params}`)
      console.log(productFound.data)
      setProduct(productFound.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
      
    };
    product();
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
                <Image src={product.product_photo} className="w-75" />
              </Col>
              <Col>

                <h2 className="title-acme">{product.product_nombre}</h2>
                <h1 className="textPrice pb-2"> ${product.product_precio} CLP</h1>
                <h4 className="pb-2 textShop">Vendido por: {product.product_seller}</h4>
                <p className="pb-5">Descripción: {product.product_description}</p>
                <div>
                  <p>Cantidad disponible: {product.product_quantity}</p>
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
