import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaShoppingCart, FaBolt } from "react-icons/fa";

const ProductDetail = ({ product }) => {
  // State for Rental Period selection (Default to Monthly)
  const [rentalPeriod, setRentalPeriod] = useState("Monthly");
  const [quantity, setQuantity] = useState(1);

  // Check if it's a rental item based on category name from your DB
  const isRentalItem = product.category__name === "Rental Services";

  return (
    <Container className="my-5 pt-5">
      <Row>
        {/* LEFT: PRODUCT IMAGES */}
        <Col md={6}>
          <div className="border rounded p-4 text-center bg-light">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
              style={{ maxHeight: "400px" }}
            />
          </div>
          {/* Thumbnails row would go here */}
        </Col>

        {/* RIGHT: PRODUCT DETAILS */}
        <Col md={6} className="ps-lg-5 text-start">
          <h2 className="fw-bold">{product.name}</h2>

          <div className="my-3">
            <span className="text-muted small">Color:</span>
            <div className="d-flex gap-2 mt-1">
              {/* Dummy colors to match your image */}
              <div
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  background: "black",
                  border: "1px solid #ccc",
                }}
              ></div>
              <div
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  background: "white",
                  border: "1px solid #ccc",
                }}
              ></div>
              <div
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  background: "blue",
                  border: "1px solid #ccc",
                }}
              ></div>
            </div>
          </div>

          <div className="my-3">
            <span className="text-muted small">Quantity</span>
            <div className="d-flex align-items-center mt-1">
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
              >
                -
              </Button>
              <span className="mx-3 fw-bold">{quantity}</span>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* AGE GROUP BUTTONS */}
          <div className="my-3">
            <span className="text-muted small">Age Group</span>
            <div className="d-flex gap-2 mt-1">
              {["0-12m", "1-2y", "3-4y"].map((age) => (
                <Button
                  key={age}
                  variant="outline-dark"
                  className="px-3 py-1"
                  style={{ fontSize: "12px" }}
                >
                  {age}
                </Button>
              ))}
            </div>
          </div>

          {/* --- CONDITIONAL RENTAL FEATURES --- */}
          {isRentalItem && (
            <div className="rental-section border-top pt-3 mt-3">
              <span className="text-muted small fw-bold">Period</span>
              <div className="d-flex gap-2 mt-2">
                {["Monthly", "Weekly", "Daily"].map((period) => (
                  <Button
                    key={period}
                    variant={
                      rentalPeriod === period ? "warning" : "outline-dark"
                    }
                    className="flex-grow-1 fw-bold"
                    style={{ fontSize: "12px" }}
                    onClick={() => setRentalPeriod(period)}
                  >
                    {period}
                  </Button>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="fw-bold mb-0">MRP: ₹ {product.price}</h3>
                <p className="text-danger small fw-bold mb-1">
                  1 month: 30 Days
                </p>
                <p className="text-success fw-bold small">Rent off 50%</p>
                <p className="small text-muted">
                  GST extra: Charges may apply on discounted price
                </p>
              </div>
            </div>
          )}

          {/* --- NORMAL ITEM PRICING --- */}
          {!isRentalItem && (
            <div className="normal-pricing mt-4">
              <h3 className="fw-bold">MRP: ₹ {product.price}</h3>
              <p className="text-muted small">Inclusive of all taxes</p>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="d-flex gap-3 mt-4">
            <Button
              variant="warning"
              className="w-50 fw-bold py-2 border-0"
              style={{ backgroundColor: "#FFCE00" }}
            >
              {isRentalItem ? "BOOK NOW" : "BUY NOW"}
            </Button>
            <Button
              variant="outline-warning"
              className="w-50 fw-bold py-2 text-dark border-2"
            >
              ADD TO CART
            </Button>
          </div>

          {/* PINCODE CHECK */}
          <div className="mt-4 pt-3 border-top">
            <span className="small text-muted fw-bold">Check Pincode</span>
            <div className="d-flex gap-2 mt-2" style={{ maxWidth: "300px" }}>
              <Form.Control
                type="text"
                placeholder="Enter Pincode"
                className="shadow-none"
              />
              <Button variant="warning" className="fw-bold px-4">
                Check
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
