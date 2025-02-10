import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import PaginationComponent from "./Pagination";
import { Container, Row, Col, Form, Button, Offcanvas } from "react-bootstrap";

const ProductContainer = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [categories, setCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const handleSort = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  const handleCategoryChange = (selectedCategories, selectedPriceRange) => {
    setCategories(selectedCategories);
    setPriceRange(selectedPriceRange);
  };

  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        categories.length === 0 || categories.includes(product.category)
    );
    filtered = filtered.filter(
      (product) =>
        product.product_price >= priceRange[0] &&
        product.product_price <= priceRange[1]
    );

    if (search) {
      filtered = filtered.filter((product) =>
        product.product_name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "") {
      setFilteredProducts(filtered);
    } else if (sort === "asc") {
      setFilteredProducts(
        [...filtered].sort((a, b) => a.product_price - b.product_price)
      );
    } else if (sort === "desc") {
      setFilteredProducts(
        [...filtered].sort((a, b) => b.product_price - a.product_price)
      );
    }
  }, [categories, priceRange, products, sort, search]);

  return (
    <>
      <Container fluid className="mt-4">
        <Row className="ms-2">
          <Col className="d-md-none mb-3 text-center">
            <Button variant="warning" onClick={() => setShowFilters(true)}>
              Filtrar
            </Button>
          </Col>

          <Offcanvas show={showFilters} onHide={() => setShowFilters(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Filtros</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Filters filterChange={handleCategoryChange} />
            </Offcanvas.Body>
          </Offcanvas>
          <Col lg={2} md={3} className="d-none d-md-block">
            <Filters filterChange={handleCategoryChange} />
          </Col>
          <Col lg={10} md={9}>
            <Row className="justify-content-center">
              <div className="d-flex gap-5 w-50">
                <Form.Select
                  onChange={handleSort}
                  size="sm"
                  className="searchOrderBy"
                  aria-label="Default select example"
                >
                  <option value="">Ordenar por</option>
                  <option value="asc">Menor a mayor precio</option>
                  <option value="desc">Mayor a menor precio</option>
                </Form.Select>
                <Form.Control
                  className="searchOrderBy"
                  size="sm"
                  type="text"
                  placeholder="Buscar"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Row>
            <Col className="d-flex flex-wrap justify-content-around m-3">
              {filteredProducts.map((prod) => (
                <ProductCard key={prod.id_product} {...prod} />
              ))}
            </Col>
            <Col className="d-flex justify-content-center m-4">
              <PaginationComponent products={filteredProducts} />
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductContainer;
