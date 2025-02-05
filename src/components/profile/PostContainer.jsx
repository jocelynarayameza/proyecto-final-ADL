import React from "react";
import useFetchProducts from "../../assets/hooks/useFetchProducts";
import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";
import MenuProfile from "./MenuProfile";

const PostContainer = () => {
  const productos = useFetchProducts();
  return (
    <Container>
      <Row>
        <Col>
          <MenuProfile />
        </Col>
      </Row>
      <Row className="m-3 d-flex justify-content-center">
        <Col>
          <h2 className="title-acme">Mis productos</h2>
        </Col>
      </Row>
      <Row className="m-3 d-flex justify-content-center">
        <Col>
          {productos.map((prod) => (
            <PostCard key={prod.id} {...prod} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PostContainer;
