import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FaEyeSlash, FaTimes } from "react-icons/fa";
import API from "../api"; // Import your live API config

const RegisterModal = ({ show, handleClose, switchToLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Uses https://pythonanywhere.com
      await API.post("register/", formData);
      alert("Registration Successful! Please log in.");
      switchToLogin();
    } catch (err) {
      alert("Error: " + (err.response?.data?.error || "Registration failed"));
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body
        className="p-0 position-relative"
        style={{
          backgroundColor: "#FBCFE8",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaTimes size={14} />
        </button>
        <Row className="g-0">
          <Col md={6} className="d-none d-md-block">
            <img
              src="/images/register-baby.jpg"
              alt="Register"
              className="w-100 h-100"
              style={{ objectFit: "cover", minHeight: "500px" }}
            />
          </Col>
          <Col md={6} className="p-4 px-lg-5 text-start">
            <h3 className="fw-bold text-center mb-4">Register</h3>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Your name"
                  className="border-0 py-2"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-0 py-2"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="border-0 py-2"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </Form.Group>
              <Button
                type="submit"
                variant="warning"
                className="w-100 fw-bold py-2 mb-3 shadow-sm border-0"
                style={{ backgroundColor: "#FFD84D" }}
              >
                Register
              </Button>
              <p className="text-center small">
                Already have an account?{" "}
                <span
                  className="text-danger fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={switchToLogin}
                >
                  Log In
                </span>
              </p>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
