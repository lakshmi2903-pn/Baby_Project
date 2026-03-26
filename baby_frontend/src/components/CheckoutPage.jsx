import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="checkout-wrapper">
      <style>
        {`
          .checkout-wrapper { padding: 40px 20px; background-color: #fff; font-family: sans-serif; }
          .breadcrumb-nav { font-size: 12px; color: #888; margin-bottom: 20px; }
          .checkout-title { text-align: center; font-size: 24px; font-weight: 800; margin-bottom: 30px; }
          
          .form-section-title { font-weight: 700; margin-bottom: 15px; font-size: 18px; }
          .custom-input { border: 1px solid #000 !important; border-radius: 8px !important; padding: 10px !important; margin-bottom: 10px; }
          .custom-label { font-size: 12px; color: #666; margin-bottom: 5px; }

          /* Right Side: Pink Summary Box */
          .summary-card { background-color: #FBCFE8; border-radius: 20px; padding: 25px; border: none; }
          .summary-title { font-weight: 800; font-size: 20px; margin-bottom: 20px; }
          .item-row { display: flex; gap: 15px; margin-bottom: 20px; }
          .item-img { width: 80px; height: 80px; background: #fff; border-radius: 10px; object-fit: contain; }
          .item-details { font-size: 13px; }
          .discount-input { border: none; border-radius: 8px; padding: 8px 15px; width: 100%; margin: 15px 0; }
          
          .total-line { display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 10px; }
          .final-total { font-weight: 800; font-size: 18px; border-top: 1px solid rgba(0,0,0,0.1); pt-2; }
          .tax-info { font-size: 10px; text-align: right; color: #666; }

          .payment-box { border: 1px solid #000; border-radius: 8px; padding: 15px; margin-top: 10px; }
          .order-now-btn { background-color: #FFD84D; border: none; font-weight: 800; border-radius: 10px; padding: 10px 40px; float: right; margin-top: 20px; }
        `}
      </style>

      <Container>
        {/* Breadcrumb */}
        <div className="breadcrumb-nav">
          Home / baby fashion / {cart[0]?.name || "Product"} / Blue / Cart /
          Checkout
        </div>

        <h2 className="checkout-title">Checkout</h2>

        <Row className="gx-5">
          {/* LEFT COLUMN: FORM */}
          <Col lg={7}>
            <div className="mb-5">
              <h5 className="form-section-title">Contact</h5>
              <Form.Control
                type="email"
                placeholder="Email (for order updates)"
                className="custom-input"
              />
              <Form.Check
                type="checkbox"
                label="Send me order updates, news and offers on Email and WhatsApp"
                className="small"
              />
            </div>

            <div className="mb-5">
              <h5 className="form-section-title">Delivery address</h5>
              <Form.Control
                placeholder="Country/Region"
                className="custom-input"
              />
              <Row>
                <Col>
                  <Form.Control
                    placeholder="First name"
                    className="custom-input"
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last name"
                    className="custom-input"
                  />
                </Col>
              </Row>
              <Form.Control placeholder="Address" className="custom-input" />
              <Row>
                <Col md={4}>
                  <Form.Control placeholder="City" className="custom-input" />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder="State" className="custom-input" />
                </Col>
                <Col md={4}>
                  <Form.Control
                    placeholder="Pincode"
                    className="custom-input"
                  />
                </Col>
              </Row>
              <Form.Control
                placeholder="Phone Number"
                className="custom-input"
              />
              <Form.Check
                type="checkbox"
                label="Save this information for next time"
                className="small"
              />
            </div>

            <div>
              <h5 className="form-section-title">Choose your payment method</h5>
              <div className="payment-box">
                <Form.Check
                  type="radio"
                  name="payment"
                  label="Secure transaction (UPI, cards, wallets, net banking)"
                  defaultChecked
                />
              </div>
              <div className="payment-box">
                <Form.Check
                  type="radio"
                  name="payment"
                  label="Cash on delivery"
                />
              </div>
            </div>
          </Col>

          {/* RIGHT COLUMN: SUMMARY */}
          <Col lg={5}>
            <div className="summary-card">
              <h4 className="summary-title">Order Summary</h4>

              {cart.map((item) => (
                <div className="item-row" key={item.id}>
                  <img src={item.image} alt="product" className="item-img" />
                  <div className="item-details">
                    <div className="fw-bold">{item.name}</div>
                    <div className="text-muted">Qty: {item.quantity}</div>
                    <div className="text-muted">Age: {item.age_group}</div>
                    <div className="fw-bold">Price: ₹{item.price}</div>
                  </div>
                </div>
              ))}

              <input
                type="text"
                className="discount-input"
                placeholder="Discount code or gift card"
              />

              <div className="total-line mt-4">
                <span>Sub total</span>
                <span className="fw-bold">₹{subtotal}</span>
              </div>
              <div className="total-line">
                <span>Shipping</span>
                <div className="text-end">
                  <div className="fw-bold">Flat rate: ₹{shipping}.00</div>
                  <div className="small text-muted">
                    Shipping to Madhya Pradesh
                  </div>
                </div>
              </div>
              <div className="total-line final-total pt-2 mt-2">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <div className="tax-info">
                (Includes ₹251.62 CGST, ₹251.62 SGST)
              </div>
            </div>

            <Button className="order-now-btn text-dark">Order Now</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutPage;
