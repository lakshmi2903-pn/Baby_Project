import React, { useState } from "react"; // Added useState
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FaEyeSlash, FaGoogle, FaFacebookF, FaTimes } from "react-icons/fa";
import axios from "axios"; // Added axios

const RegisterModal = ({ show, handleClose, switchToLogin }) => {
  // 1. ADD STATE TO CAPTURE FORM DATA
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // 2. CALL YOUR DJANGO REGISTER API
      const res = await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData,
      );

      alert("Registration Successful! Please log in.");

      // 3. AUTOMATICALLY SWITCH TO LOGIN MODAL
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
              src="/images/register-baby.jpg" // Ensure this image is in public/images/
              alt="Register"
              className="w-100 h-100"
              style={{ objectFit: "cover", minHeight: "500px" }}
            />
          </Col>
          <Col md={6} className="p-4 px-lg-5 text-start">
            <h3 className="fw-bold text-center mb-4">Register</h3>

            {/* 4. ADD onSubmit AND onChange HANDLERS */}
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
                <div className="position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="border-0 py-2"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <FaEyeSlash className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
                </div>
              </Form.Group>

              <Button
                type="submit" // Changed to type="submit"
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

              <div className="d-flex align-items-center my-3">
                <hr className="flex-grow-1" />
                <span className="mx-2 small text-muted">Or</span>
                <hr className="flex-grow-1" />
              </div>

              <Button
                variant="light"
                className="w-100 mb-2 border-0 shadow-sm bg-white py-2"
                style={{ fontSize: "13px" }}
              >
                Continue with Google <FaGoogle className="ms-2 text-danger" />
              </Button>
              <Button
                variant="light"
                className="w-100 border-0 shadow-sm bg-white py-2"
                style={{ fontSize: "13px" }}
              >
                Continue with Facebook{" "}
                <FaFacebookF className="ms-2 text-primary" />
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
