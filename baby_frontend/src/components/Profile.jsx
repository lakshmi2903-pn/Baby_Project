import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUserCircle, FaEnvelope, FaEdit } from "react-icons/fa";

const Profile = ({ user }) => {
  // If no user is logged in, show a message
  if (!user) {
    return (
      <Container className="text-center my-5 pt-5">
        <h4 className="text-muted">Please log in to view your profile.</h4>
      </Container>
    );
  }

  return (
    <Container className="my-5 pt-5 text-start">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card
            className="shadow-sm border-0 p-4"
            style={{ borderRadius: "20px" }}
          >
            <div className="d-flex align-items-center mb-4 border-bottom pb-3">
              <FaUserCircle size={80} className="text-warning me-4" />
              <div>
                <h2 className="fw-bold mb-0">{user.name || "User"}</h2>
                <p className="text-muted mb-0">Customer Account</p>
              </div>
            </div>

            <Row className="gy-4">
              <Col md={6}>
                <label className="text-muted small fw-bold">FULL NAME</label>
                <div className="p-2 border rounded bg-light fw-bold">
                  {user.name || "N/A"}
                </div>
              </Col>
              <Col md={6}>
                <label className="text-muted small fw-bold">
                  EMAIL ADDRESS
                </label>
                <div className="p-2 border rounded bg-light d-flex align-items-center">
                  <FaEnvelope className="text-muted me-2" />
                  <span className="fw-bold">{user.email}</span>
                </div>
              </Col>
              <Col md={6}>
                <label className="text-muted small fw-bold">
                  ACCOUNT STATUS
                </label>
                <div className="p-2 border rounded bg-light text-success fw-bold">
                  Active
                </div>
              </Col>
            </Row>

            <div className="mt-5 d-flex gap-3">
              <Button
                variant="warning"
                className="fw-bold px-4 py-2 border-0 shadow-sm"
                style={{ backgroundColor: "#FFD84D" }}
              >
                <FaEdit className="me-2" /> Edit Profile
              </Button>
              <Button variant="outline-dark" className="fw-bold px-4 py-2">
                Change Password
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
