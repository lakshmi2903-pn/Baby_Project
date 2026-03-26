import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Forum = () => {
  return (
    <Container className="my-5 pt-4 text-start">
      {/* --- JOIN FORUM HEADER --- */}
      <div className="d-flex mb-4">
        <div
          className="bg-warning px-5 py-2 fw-bold rounded shadow-sm"
          style={{ fontSize: "14px", borderRadius: "8px" }}
        >
          Join Forum
        </div>
      </div>

      {/* --- CATEGORY BOXES --- */}
      <Row className="mb-5">
        <Col md={3} className="mb-3">
          <Card
            className="border-0 shadow text-white overflow-hidden"
            style={{ borderRadius: "10px", height: "200px" }}
          >
            <Card.Img
              src="/images/preg.jpg"
              className="h-100 w-100"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
              <h6 className="fw-bold mb-1">Pregnancy</h6>
              <p style={{ fontSize: "10px" }} className="mb-2">
                Join forum to ask or share something
              </p>
              <Button
                variant="warning"
                size="sm"
                className="fw-bold px-4 align-self-end"
                style={{ borderRadius: "8px", fontSize: "11px" }}
              >
                Join
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card
            className="border-0 shadow text-white overflow-hidden"
            style={{ borderRadius: "10px", height: "200px" }}
          >
            <Card.Img
              src="/images/parent.webp"
              className="h-100 w-100"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
              <h6 className="fw-bold mb-1">Parenting</h6>
              <p style={{ fontSize: "10px" }} className="mb-2">
                Join forum to ask or share something
              </p>
              <Button
                variant="warning"
                size="sm"
                className="fw-bold px-4 align-self-end"
                style={{ borderRadius: "8px", fontSize: "11px" }}
              >
                Join
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card
            className="border-0 shadow text-white overflow-hidden"
            style={{ borderRadius: "10px", height: "200px" }}
          >
            <Card.Img
              src="/images/child.jpg"
              className="h-100 w-100"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
              <h6 className="fw-bold mb-1">Childcare</h6>
              <p style={{ fontSize: "10px" }} className="mb-2">
                Join forum to ask or share something
              </p>
              <Button
                variant="warning"
                size="sm"
                className="fw-bold px-4 align-self-end"
                style={{ borderRadius: "8px", fontSize: "11px" }}
              >
                Join
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md={3} className="mb-3">
          <Card
            className="border-0 shadow text-white overflow-hidden"
            style={{ borderRadius: "10px", height: "200px" }}
          >
            <Card.Img
              src="/images/prod.jpg"
              className="h-100 w-100"
              style={{ objectFit: "cover", filter: "brightness(0.6)" }}
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-3">
              <h6 className="fw-bold mb-1">Product Reviews</h6>
              <p style={{ fontSize: "10px" }} className="mb-2">
                Join forum to ask or share something
              </p>
              <Button
                variant="warning"
                size="sm"
                className="fw-bold px-4 align-self-end"
                style={{ borderRadius: "8px", fontSize: "11px" }}
              >
                Join
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* --- BLOGS HEADER --- */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div
          className="bg-warning px-5 py-2 fw-bold rounded shadow-sm"
          style={{ fontSize: "14px", borderRadius: "8px" }}
        >
          Blogs
        </div>
        <a href="#" className="text-primary text-decoration-none fw-bold small">
          View more
        </a>
      </div>

      {/* --- BLOG POSTS WITH FULL TEXT --- */}
      <Row>
        {/* Blog 1: Rainbow Baby */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm border p-3"
            style={{ borderRadius: "15px" }}
          >
            <Row className="g-0">
              <Col xs={5}>
                <img
                  src="/images/blog1.jpg"
                  className="img-fluid rounded"
                  alt="Rainbow Baby"
                  style={{ height: "180px", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col xs={7} className="ps-3 d-flex flex-column">
                <h6 className="fw-bold mb-2">The Story of My Rainbow Baby</h6>
                <p
                  className="text-muted mb-auto"
                  style={{ fontSize: "11px", lineHeight: "1.5" }}
                >
                  What does it mean when I say that my daughter is my 'Rainbow
                  Baby'? A 'Rainbow Baby' is a baby that is born following a
                  miscarriage or an infant loss. Just like a beautiful and
                  colorful rainbow that appears after a dark and heavy storm...
                </p>
                <div className="text-end mt-2">
                  <Button
                    variant="warning"
                    size="sm"
                    className="fw-bold px-4"
                    style={{ borderRadius: "8px", fontSize: "11px" }}
                  >
                    Read more
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Blog 2: Dry Skin */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm border p-3"
            style={{ borderRadius: "15px" }}
          >
            <Row className="g-0">
              <Col xs={5}>
                <img
                  src="/images/blog2.jpg"
                  className="img-fluid rounded"
                  alt="Dry Skin"
                  style={{ height: "180px", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col xs={7} className="ps-3 d-flex flex-column">
                <h6 className="fw-bold mb-2">
                  Baby Dry Skin: Symptoms, Causes and Treatment
                </h6>
                <p
                  className="text-muted mb-auto"
                  style={{ fontSize: "11px", lineHeight: "1.5" }}
                >
                  For a parent, their baby's health is of utmost importance.
                  This means taking care of their internal health by ensuring
                  the right kind of nutrition and choosing products that not
                  only secure their well-being but also their comfort...
                </p>
                <div className="text-end mt-2">
                  <Button
                    variant="warning"
                    size="sm"
                    className="fw-bold px-4"
                    style={{ borderRadius: "8px", fontSize: "11px" }}
                  >
                    Read more
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Blog 3: Raisins */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm border p-3"
            style={{ borderRadius: "15px" }}
          >
            <Row className="g-0">
              <Col xs={5}>
                <img
                  src="/images/blog3.jpg"
                  className="img-fluid rounded"
                  alt="Raisins"
                  style={{ height: "180px", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col xs={7} className="ps-3 d-flex flex-column">
                <h6 className="fw-bold mb-2">
                  Raisins for babies - Health benefits and risks
                </h6>
                <p
                  className="text-muted mb-auto"
                  style={{ fontSize: "11px", lineHeight: "1.5" }}
                >
                  Many of us love a good old raisin - they are small, wrinkled
                  pockets of energy that have been around since medieval times
                  and are famous for being a natural source of minerals,
                  vitamins, and carbohydrates...
                </p>
                <div className="text-end mt-2">
                  <Button
                    variant="warning"
                    size="sm"
                    className="fw-bold px-4"
                    style={{ borderRadius: "8px", fontSize: "11px" }}
                  >
                    Read more
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Blog 4: Hernia */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow-sm border p-3"
            style={{ borderRadius: "15px" }}
          >
            <Row className="g-0">
              <Col xs={5}>
                <img
                  src="/images/blog4.webp"
                  className="img-fluid rounded"
                  alt="Hernia"
                  style={{ height: "180px", width: "100%", objectFit: "cover" }}
                />
              </Col>
              <Col xs={7} className="ps-3 d-flex flex-column">
                <h6 className="fw-bold mb-2">
                  Hernia in Babies - Types, Causes, Signs and Treatment
                </h6>
                <p
                  className="text-muted mb-auto"
                  style={{ fontSize: "11px", lineHeight: "1.5" }}
                >
                  A hernia is a lump that develops under the skin, in the tummy
                  or groin region, and in variable sizes. When the muscles
                  across the tummy area and the pelvic region weaken or develop
                  a gap, it can lead to the protrusion of organs...
                </p>
                <div className="text-end mt-2">
                  <Button
                    variant="warning"
                    size="sm"
                    className="fw-bold px-4"
                    style={{ borderRadius: "8px", fontSize: "11px" }}
                  >
                    Read more
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Forum;
