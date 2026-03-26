import React from "react";
import { Col, Row, Card, Button, Form } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
// 1. IMPORT useNavigate
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ products, loading, currentCategory }) => {
  const { addToCart } = useCart();

  // 2. INITIALIZE useNavigate
  const navigate = useNavigate();

  return (
    <Col md={9}>
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h4 className="fw-bold m-0 text-dark">
          {currentCategory || "All Products"}
        </h4>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-bold small">Sort by</span>
          <Form.Select
            size="sm"
            style={{
              width: "160px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option>New arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </Form.Select>
        </div>
      </div>

      <Row>
        {loading ? (
          <div className="text-center p-5 w-100">Loading products...</div>
        ) : products.length > 0 ? (
          products.map((item) => (
            <Col sm={6} md={4} key={item.id} className="mb-4">
              <Card
                className="h-100 border shadow-sm position-relative"
                style={{ borderRadius: "12px" }}
              >
                <div
                  className="position-absolute top-0 end-0 p-2 text-muted"
                  style={{ cursor: "pointer", zIndex: 5 }}
                >
                  <FaHeart size={16} />
                </div>

                <div
                  style={{ height: "200px", background: "#f8f9fa" }}
                  className="d-flex align-items-center justify-content-center p-3 rounded-top"
                >
                  {/* OPTIONAL: Make the image also clickable to navigate */}
                  <Card.Img
                    variant="top"
                    src={item.image}
                    style={{
                      maxHeight: "100%",
                      width: "auto",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                </div>

                <Card.Body className="d-flex flex-column text-start">
                  <Card.Title
                    className="fs-6 fw-bold mb-2 lh-sm"
                    style={{
                      height: "40px",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    {item.name}
                  </Card.Title>

                  <div className="small mb-1">
                    <span className="text-muted">Price: </span>
                    <span className="fw-bold">₹ {item.price}</span>
                    {item.rental_period && (
                      <span
                        className="text-muted ms-1"
                        style={{ fontSize: "10px" }}
                      >
                        for {item.rental_period}
                      </span>
                    )}
                  </div>

                  <div
                    className="small mb-2 text-muted"
                    style={{ fontSize: "11px" }}
                  >
                    Age: {item.age_group}
                  </div>

                  {currentCategory !== "Toys" && (
                    <div className="d-flex gap-1 mb-3 align-items-center">
                      <span
                        className="small text-muted me-1"
                        style={{ fontSize: "11px" }}
                      >
                        Color:
                      </span>
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          background: item.color
                            ? item.color.toLowerCase()
                            : "gray",
                          borderRadius: "50%",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>
                  )}

                  <div className="d-flex gap-2 mt-auto">
                    <Button
                      variant="warning"
                      className="w-100 fw-bold border-0 text-dark"
                      style={{
                        backgroundColor: "#FFCE00",
                        borderRadius: "8px",
                        fontSize: "11px",
                      }}
                      // 3. ADD onClick TO NAVIGATE TO THE DETAIL PAGE
                      onClick={() => navigate(`/product/${item.id}`)}
                    >
                      {currentCategory === "Rental Services"
                        ? "Book Now"
                        : "Buy Now"}
                    </Button>
                    <Button
                      variant="warning"
                      className="w-100 fw-bold border-0 text-dark"
                      style={{
                        backgroundColor: "#FFCE00",
                        borderRadius: "8px",
                        fontSize: "11px",
                      }}
                      onClick={() => addToCart(item)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center py-5">
            <h5 className="text-muted">No products found.</h5>
          </Col>
        )}
      </Row>
    </Col>
  );
};

export default ProductGrid;
