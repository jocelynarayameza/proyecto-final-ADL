import React from "react";
import useFetchProducts from "../../assets/hooks/useFetchProducts";
import PostCard from "./PostCard";
import { Container, Row, Col } from "react-bootstrap";

const PostContainer = () => {
  const products = useFetchProducts();
  return (
    <Container>
      
      <Row className="m-3 d-flex justify-content-center">
        <Col>
          <h2 id='titleProfile'>Mis productos</h2>
        </Col>
      </Row>
      <Row className="m-3 d-flex justify-content-center">
        <Col>
          {products.map((prod) => (
            <PostCard key={prod.id} {...prod} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PostContainer;
