import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f06292", color: "white", marginTop: "50px" }}>
      <Container className="py-5">
        <Row className="gy-4">
          <Col md={3}>
            <h5 className="fw-bold mb-3">BabyZone</h5>
            <p className="small">Your one-stop shop for high-quality baby clothes, toys, and essentials. We deliver joy to your doorstep.</p>
            <div className="d-flex gap-3 fs-5 mt-3">
              <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaYoutube />
            </div>
          </Col>

          <Col md={3} xs={6}>
            <h6 className="fw-bold text-uppercase small mb-3">Shop By</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Baby Fashion</li>
              <li className="mb-2">Educational Toys</li>
              <li className="mb-2">Moms Care</li>
              <li className="mb-2">Furniture</li>
            </ul>
          </Col>

          <Col md={3} xs={6}>
            <h6 className="fw-bold text-uppercase small mb-3">Customer Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">Track Order</li>
              <li className="mb-2">Shipping Policy</li>
              <li className="mb-2">Return & Exchange</li>
              <li className="mb-2">FAQs</li>
            </ul>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold text-uppercase small mb-3">Contact Us</h6>
            <p className="small mb-1">📍 4th Street, Pallavaram, Madurai</p>
            <p className="small mb-1">📞 +91 98765 43210</p>
            <p className="small">✉️ support@babyzone.com</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3 bg-dark text-white-50 small">
        © 2026 BabyZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
