import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-page bg-white">
      {/* 1. STYLES (Moved inside return) */}
      <style>{`
        .about-page { font-family: 'Segoe UI', Tahoma, sans-serif; overflow-x: hidden; }
        .pink-circle-bg {
          position: absolute; width: 400px; height: 400px;
          background-color: #fce4ec; border-radius: 50%;
          top: 50%; right: -100px; transform: translateY(-50%); z-index: 1;
        }
        .about-img-wrapper { position: relative; z-index: 2; }
        .about-img-wrapper img { 
          width: 350px; height: 350px; object-fit: cover; 
          border: 10px solid #fff; 
        }
        @media (max-width: 768px) { .pink-circle-bg { display: none; } }
      `}</style>

      {/* 2. BREADCRUMB */}
      <Container className="py-3">
        <p className="text-muted small">
          Home/ <span className="text-dark">About</span>
        </p>
      </Container>

      {/* 3. CONTENT SECTION */}
      <Container className="py-4 position-relative">
        <h2 className="text-center fw-bold mb-5">About Us</h2>
        <Row className="align-items-center">
          <Col md={7}>
            <div className="mb-5">
              <h4 className="fw-bold mb-3">Our Mision</h4>
              <p className="text-muted lh-base">
                "To empower parents by providing thoughtfully designed, safe,
                and sustainable baby essentials that make childcare easier and
                more enjoyable for every family. To be the go-to online store
                for parents seeking reliable, expertly curated baby products,
                ensuring peace of mind with every purchase. To offer innovative,
                high-quality baby gear and apparel that promote infant comfort,
                safety, and healthy development from day one."
              </p>
            </div>
            <div>
              <h4 className="fw-bold mb-3">Our Vision</h4>
              <p className="text-muted lh-base">
                "To create a world where every new parent has access to the best
                resources and products, fostering a generation of healthy,
                happy, and thriving children. To become the most beloved and
                trusted global community for parents, known for our commitment
                to quality, innovation, and family well-being. To revolutionize
                the way families shop for baby products, setting the standard
                for sustainability, transparency, and personalized support in
                the industry."
              </p>
            </div>
          </Col>

          {/* Right Side Image */}
          <Col md={5} className="position-relative text-center">
            <div className="pink-circle-bg"></div>
            <div className="about-img-wrapper">
              <img
                src="/images/IMG_20250815_192725_035.jpg"
                alt="About"
                className="img-fluid rounded-circle shadow"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* 4. MAP SECTION */}
      <Container className="py-5">
        <div className="map-container rounded overflow-hidden border">
          <img
            src="/images/maps-location-1024x576.jpg"
            alt="Map"
            className="w-100"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
