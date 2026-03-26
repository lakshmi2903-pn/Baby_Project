import React from "react";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const ban1 = "/images/ban1.jpg";
const ban2 = "/images/ban2.jpg";
const stroller1 = "/images/stroller1.jpg";
const stroller2 = "/images/stroller2.jpg";
const carseat = "/images/carseat.jpg";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Boys fashion",
      img: "/images/cat_boy.jpg",
      path: "/shop?gender=Boy",
    },
    {
      name: "Girls fashion",
      img: "/images/cat_girl.jpg",
      path: "/shop?gender=Girl",
    },
    {
      name: "Footwear",
      img: "/images/cat_footwear.webp",
      path: "/shop?category=Footwear",
    },
    {
      name: "Accessories",
      img: "/images/ban2.jpg",
      path: "/shop?category=Accessories",
    },
    { name: "Toys", img: "/images/cat_toys.jpg", path: "/shop?category=Toys" },
    { name: "Beds", img: "/images/ban1.jpg", path: "/shop?category=Beds" },
  ];

  const brands = [
    "/images/brand_pampers.png",
    "/images/brand_babyking.webp",
    "/images/brand_kidlon.png",
    "/images/brand_fancy.jpg",
    "/images/brand_johnsons.jpg",
    "/images/brand_pampers.png", // Repeat some to ensure a smooth loop
  ];

  return (
    <div className="home-page">
      {/* 1. ANIMATED BANNERS */}
      <Carousel
        fade
        interval={5000}
        controls={true}
        indicators={true}
        className="main-carousel"
      >
        <Carousel.Item>
          <div className="slant-banner-container d-flex align-items-stretch">
            <div
              className="side-img left-slant"
              style={{ backgroundImage: `url(${ban1})` }}
            ></div>
            <div className="center-info">
              <div className="black-tag mb-3">
                <h2 className="m-0 fw-bold text-white">
                  Flat <span className="pink-text">30%</span> Off
                </h2>
              </div>
              <h3 className="fw-bold text-dark lh-sm">
                Baby beds &<br />
                Accessories
              </h3>
              <Button
                variant="warning"
                className="shop-btn mt-3 rounded-pill fw-bold"
              >
                Shop Now
              </Button>
            </div>
            <div
              className="side-img right-slant"
              style={{ backgroundImage: `url(${ban2})` }}
            ></div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="launch-banner-bg py-5">
            <Container className="d-flex align-items-center justify-content-between position-relative">
              <div className="d-flex gap-3">
                <div className="product-img-box shadow-sm animate-pop-1">
                  <img src={stroller1} alt="S1" />
                </div>
                <div className="product-img-box shadow-sm animate-pop-2">
                  <img src={stroller2} alt="S2" />
                </div>
                <div className="product-img-box shadow-sm animate-pop-3">
                  <img src={carseat} alt="C1" />
                </div>
              </div>
              <div className="launch-text flex-grow-1 ps-4 text-start">
                <div className="mini-black-tag mb-2 text-white">
                  Flat 30% Off
                </div>
                <h2 className="fw-bold m-0 text-dark">New launch</h2>
                <p className="text-muted small">
                  Strollers, car seats & Much more
                </p>
                <Button
                  variant="warning"
                  className="shop-btn mt-3 rounded-pill fw-bold"
                >
                  Shop Now
                </Button>
              </div>
              <div className="side-arrow shadow">
                <FaChevronRight />
              </div>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* 2. CATEGORIES SECTION */}
      <Container className="my-5 text-center">
        <h4 className="fw-bold mb-4">Categories</h4>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-item"
              onClick={() => navigate(cat.path)}
              style={{ cursor: "pointer", width: "120px" }}
            >
              <div className="pink-oval-wrapper mx-auto mb-2">
                {/* FIXED: Removed the extra /images/ from the src because it's already in the array */}
                <img src={cat.img} alt={cat.name} className="category-img" />
              </div>
              <p className="fw-bold small text-dark">{cat.name}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* 3. NEW ARRIVALS (MATCHED TO IMAGE) */}
      <Container className="my-5">
        <h4 className="fw-bold mb-4 text-start">New Arrivals</h4>
        <Row className="g-4">
          {[
            {
              id: 1,
              name: "Cotton Seersucker Frill Dress",
              price: "2,099",
              img: "/images/20913784a.webp",
            },
            {
              id: 2,
              name: "Cute Walk by Babyhug",
              price: "936",
              img: "/images/cat_footwear.webp",
            },
            {
              id: 3,
              name: "Babyoye Disney",
              price: "590",
              img: "/images/18108226a.webp",
            },
            {
              id: 4,
              name: "Bath Squeeze Toys",
              price: "237",
              img: "/images/11918372a.webp",
            },
            {
              id: 5,
              name: "Advanced Pant Style Diapers (XL)",
              price: "1,185",
              img: "/images/9356371a.webp",
            },
            {
              id: 6,
              name: "Comfy Ride Stroller With Reversible Handle",
              price: "3,180",
              img: "/images/1773877a.webp",
            },
            {
              id: 7,
              name: "Runway Cabin Stroller in Linen Fabric",
              price: "9,730",
              img: "/images/14530273a.webp",
            },
            {
              id: 8,
              name: "Cocoon Stroller Mosquito Net & Reversible Handle",
              price: "3,190",
              img: "/images/700003a.webp",
            },
          ].map((product) => (
            <Col md={3} key={product.id}>
              <div className="arrival-card border rounded p-3 bg-white h-100 d-flex flex-column">
                {/* Inner Image Box with border */}
                <div className="img-box-inner mb-3 border rounded d-flex align-items-center justify-content-center p-2">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </div>

                {/* Product Title */}
                <h6
                  className="fw-bold small mb-1 text-dark"
                  style={{ minHeight: "38px", fontSize: "13px" }}
                >
                  {product.name}
                </h6>

                <div className="mt-auto">
                  <p className="text-muted mb-2" style={{ fontSize: "11px" }}>
                    MRP: ₹ {product.price}
                  </p>
                  {/* Yellow Buy Button */}
                  <Button className="exact-buy-btn w-100 fw-bold border-0">
                    Buy
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      {/* 3. INFINITE TOP BRANDS SLIDER */}
      <div className="brand-section my-5 overflow-hidden">
        <h4 className="fw-bold mb-4 text-center">Top Brands</h4>
        <div className="brand-track">
          {/* We duplicate the brand array twice for a seamless infinite loop */}
          {[...brands, ...brands].map((brand, index) => (
            <div key={index} className="brand-item border p-3">
              <img src={brand} alt="brand" className="img-fluid" />
            </div>
          ))}
        </div>
      </div>
      {/* 5. TESTIMONIALS (Hardcoded to avoid errors) */}
      <Container className="my-5 pt-5 pb-5">
        <h4 className="fw-bold mb-5 text-center">Our happy customer</h4>
        <Row className="g-4">
          {/* Card 1: Bosky */}
          <Col md={3}>
            <div className="testimonial-card border rounded p-3 pt-5 text-center position-relative bg-white shadow-sm">
              <div className="avatar-wrapper shadow-sm">
                <img src="/images/user1.jpg" alt="user" />
              </div>
              <h6 className="fw-bold mb-1 mt-2">Bosky</h6>
              <div className="text-warning mb-2 small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="small text-muted mb-4 px-1"
                style={{ height: "60px" }}
              >
                Very fast service and products are genuine. Definitely I am
                satisfied!
              </p>
              <div className="d-flex justify-content-end gap-3 text-muted small mt-auto">
                <span>
                  <FaRegThumbsDown /> 0
                </span>
                <span>
                  <FaRegThumbsUp /> 5
                </span>
              </div>
            </div>
          </Col>

          {/* Card 2: Tulip */}
          <Col md={3}>
            <div className="testimonial-card border rounded p-3 pt-5 text-center position-relative bg-white shadow-sm">
              <div className="avatar-wrapper shadow-sm">
                <img src="/images/user2.jpg" alt="user" />
              </div>
              <h6 className="fw-bold mb-1 mt-2">Tulip</h6>
              <div className="text-warning mb-2 small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="small text-muted mb-4 px-1"
                style={{ height: "60px" }}
              >
                Amazing products. Reasonable prices. Gr8 customer service.
                Cheers!!!!!
              </p>
              <div className="d-flex justify-content-end gap-3 text-muted small mt-auto">
                <span>
                  <FaRegThumbsDown /> 0
                </span>
                <span>
                  <FaRegThumbsUp /> 5
                </span>
              </div>
            </div>
          </Col>

          {/* Card 3: Deepa */}
          <Col md={3}>
            <div className="testimonial-card border rounded p-3 pt-5 text-center position-relative bg-white shadow-sm">
              <div className="avatar-wrapper shadow-sm">
                <img src="/images/user3.png" alt="user" />
              </div>
              <h6 className="fw-bold mb-1 mt-2">Deepa</h6>
              <div className="text-warning mb-2 small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="small text-muted mb-4 px-1"
                style={{ height: "60px" }}
              >
                Great range of products right from new-born essentials...
                Excellent quality
              </p>
              <div className="d-flex justify-content-end gap-3 text-muted small mt-auto">
                <span>
                  <FaRegThumbsDown /> 0
                </span>
                <span>
                  <FaRegThumbsUp /> 5
                </span>
              </div>
            </div>
          </Col>

          {/* Card 4: Moshin */}
          <Col md={3}>
            <div className="testimonial-card border rounded p-3 pt-5 text-center position-relative bg-white shadow-sm">
              <div className="avatar-wrapper shadow-sm">
                <img src="/images/user4.jpg" alt="user" />
              </div>
              <h6 className="fw-bold mb-1 mt-2">Moshin</h6>
              <div className="text-warning mb-2 small">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p
                className="small text-muted mb-4 px-1"
                style={{ height: "60px" }}
              >
                Great site for baby product, i m shopping here since 2012.
                Quality never changed.
              </p>
              <div className="d-flex justify-content-end gap-3 text-muted small mt-auto">
                <span>
                  <FaRegThumbsDown /> 0
                </span>
                <span>
                  <FaRegThumbsUp /> 5
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <style>{`
        /* Styles remain the same... */
        .slant-banner-container { height: 450px; display: flex; width: 100%; overflow: hidden; background: #FCE4EC; }
        .side-img { flex: 1; background-size: cover; background-position: center; position: relative; }
        .left-slant { clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%); margin-right: -8%; z-index: 2; }
        .right-slant { clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%); margin-left: -8%; z-index: 2; }
        .center-info { flex: 1.2; background: #FCE4EC; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 1; }
        .black-tag { background: black; padding: 10px 25px; transform: skew(-15deg); border-radius: 4px; }
        .black-tag h2 { transform: skew(15deg); font-size: 24px; }
        .pink-text { color: #f06292; }
        .pink-oval-wrapper { width: 110px; height: 140px; border: 3px solid #F9A8D4; border-radius: 60px; overflow: hidden; padding: 4px; transition: 0.3s; }
        .category-img { width: 100%; height: 100%; object-fit: cover; border-radius: 55px; }
        .img-placeholder { height: 180px; background: #f8f9fa; }
        .buy-btn { background: #FFCE00 !important; border: none; font-weight: bold; padding: 4px 20px; color: black; border-radius: 6px; }
        .launch-banner-bg { background-color: #FCE4EC; min-height: 450px; display: flex; align-items: center; }
        .product-img-box { width: 180px; height: 280px; border-radius: 20px; overflow: hidden; background: white; opacity: 0; transform: translateY(30px); }
        .product-img-box img { width: 100%; height: 100%; object-fit: cover; }
        @keyframes popUp { to { opacity: 1; transform: translateY(0); } }
        .active .animate-pop-1 { animation: popUp 0.6s ease forwards; animation-delay: 0.3s; }
        .active .animate-pop-2 { animation: popUp 0.6s ease forwards; animation-delay: 0.6s; }
        .active .animate-pop-3 { animation: popUp 0.6s ease forwards; animation-delay: 0.9s; }
        .mini-black-tag { background: black; padding: 4px 15px; font-weight: bold; font-size: 13px; border-radius: 4px; display: inline-block; }
        .shop-btn { background: #FFCE00 !important; border: none; color: black; padding: 8px 30px !important; }
        .side-arrow { position: absolute; right: -20px; background: black; color: white; width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        /* Card Border Styling */
.arrival-card { 
  border: 1px solid #cccccc !important; 
  transition: transform 0.2s;
}

.arrival-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

/* Inner Image Container Border */
.img-box-inner { 
  height: 180px; 
  background-color: #fff; 
  border: 1px solid #eeeeee !important; 
}

/* Exact Golden Yellow Buy Button */
.exact-buy-btn { 
  background-color: #FFD84D !important; 
  color: #000 !important; 
  padding: 6px 0 !important; 
  border-radius: 4px !important; 
  font-size: 14px;
}

.exact-buy-btn:hover {
  background-color: #fbc02d !important;
}
  /* Infinite Brand Animation */
        .brand-track {
          display: flex;
          width: calc(250px * 12); /* Based on brand width * total items */
          animation: scroll 20s linear infinite;
        }

        .brand-item {
          width: 200px;
          height: 100px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 15px;
          background: white;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-200px * 6)); } /* Adjust based on original list length */
        }

        /* Testimonial Styling */
        .testimonial-card { min-height: 280px; border: 1px solid #ddd !important; }
        
        .avatar-wrapper {
          width: 80px; height: 80px; border-radius: 50%; overflow: hidden;
          position: absolute; top: -40px; left: 50%; transform: translateX(-50%);
          border: 4px solid #fff; background: #eee;
        }
        .avatar-wrapper img { width: 100%; height: 100%; object-fit: cover; }
        
        .testimonial-text {
          min-height: 60px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .view-more-btn { background-color: #FFD84D !important; border: none; border-radius: 4px; }
     
      `}</style>
    </div>
  );
};

export default Home;
