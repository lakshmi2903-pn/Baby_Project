import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ 1. ADDED THIS IMPORT
import { Trash2 } from "lucide-react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ 2. This will now work because of the import above

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container style={{ marginTop: "50px", minHeight: "60vh" }}>
      <h2 className="fw-bold mb-4">Your Shopping Cart</h2>
      <Row>
        <Col md={8}>
          {cart.length === 0 ? (
            <div className="text-center p-5 border rounded bg-light">
              <h4>Your cart is empty</h4>
              <Button
                variant="warning"
                onClick={() => navigate("/shop")}
                className="mt-3 fw-bold"
              >
                Go Shopping
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm border-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col xs={6} md={7}>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <p className="text-muted mb-0 small">
                        Price: ₹{item.price}
                      </p>
                      <p className="fw-bold mb-0">Qty: {item.quantity}</p>
                    </Col>
                    <Col xs={3} md={3} className="text-end">
                      <p className="fw-bold mb-2">
                        ₹{item.price * item.quantity}
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))
          )}
        </Col>

        {/* Order Summary */}
        {cart.length > 0 && (
          <Col md={4}>
            <Card className="p-3 border-0 shadow-sm bg-light">
              <h5 className="fw-bold border-bottom pb-2">Summary</h5>
              <div className="d-flex justify-content-between my-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="d-flex justify-content-between my-2 border-top pt-2 fw-bold">
                <span>Total Amount</span>
                <span className="text-success">₹{total}</span>
              </div>
              <Button
                variant="warning"
                className="w-100 fw-bold mt-3"
                style={{ backgroundColor: "#FFD84D", border: "none" }}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CartPage;
