import React, { useEffect, useState } from "react";
import ProductContainer from "../components/home/ProductContainer";
import useFetchProducts from "../assets/hooks/useFetchProducts";
import { Col, Container, Row } from "react-bootstrap";
import Filters from "../components/home/Filters";

const Home = () => {
  const products = useFetchProducts();
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
  // };
  return (
    <>
    <Container fluid className="mt-4">
      <Row>
        <Col md={4} lg={3} xl={2} className="d-none d-md-block">
          <Filters
          filterChange={handleCategoryChange}
          />
        </Col>
        <Col md={8} lg={9} xl={10}>
          <ProductContainer products= {products} />
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default Home;

