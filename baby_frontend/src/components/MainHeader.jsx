import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  Form,
  NavDropdown,
} from "react-bootstrap";
import {
  FaSearch,
  FaMicrophone,
  FaShoppingCart,
  FaChevronDown,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

// Modals
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

// ADD 'user', 'onLogout', 'onLogin' props here
const Header = ({
  onCategoryChange,
  activeCategory,
  user,
  onLogout,
  onLogin,
}) => {
  const { cart } = useCart();
  const location = useLocation();

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };
  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const activeColor = "#dc3545";
  const defaultColor = "#212529";

  return (
    <>
      <style>
        {`
          .custom-nav-link {
            color: ${defaultColor} !important;
            font-weight: 700 !important;
            text-decoration: none !important;
            font-size: 14px;
          }
          .active-link { color: ${activeColor} !important; }
          .account-dropdown .dropdown-toggle::after { display: none; }
          .account-dropdown .dropdown-menu { 
            border-radius: 10px; border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            padding: 0; overflow: hidden;
          }
          .dropdown-item { font-size: 13px; font-weight: 600; padding: 10px 20px; }
          .login-item { background-color: #FFD84D !important; }
        `}
      </style>

      <header
        className="fixed-top w-100 bg-white shadow-sm"
        style={{ zIndex: 1050 }}
      >
        {/* 1. YELLOW BANNER */}
        <div
          className="text-center py-2 fw-medium px-3"
          style={{ backgroundColor: "#FFD84D", fontSize: "12px" }}
        >
          😊 Autumn winter 2025 is here! Dress your little one in soft,
          breathable fabrics!
        </div>

        {/* 2. MAIN NAVBAR */}
        <Navbar bg="white" expand="lg" className="py-2 border-bottom">
          <Container fluid className="px-lg-5">
            <Navbar.Brand as={Link} to="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="rounded-circle"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </Navbar.Brand>

            {/* Search */}
            <div
              className="d-flex align-items-center flex-grow-1 mx-lg-5"
              style={{ maxWidth: "450px" }}
            >
              <InputGroup
                className="rounded-pill border px-3 bg-white"
                style={{ height: "42px" }}
              >
                <InputGroup.Text className="bg-transparent border-0 ps-0 pe-2">
                  <FaSearch className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search here"
                  className="border-0 shadow-none ps-0"
                  style={{ fontSize: "14px" }}
                />
              </InputGroup>
              <div
                className="ms-2 border rounded-circle d-flex align-items-center justify-content-center shadow-sm text-muted"
                style={{ width: "42px", height: "42px" }}
              >
                <FaMicrophone />
              </div>
            </div>

            <Nav className="ms-auto align-items-center gap-4">
              <Link
                to="/"
                className={`custom-nav-link ${location.pathname === "/" ? "active-link" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`custom-nav-link ${location.pathname === "/about" ? "active-link" : ""}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`custom-nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}
              >
                Contact
              </Link>
              <Link
                to="/forum"
                className={`custom-nav-link ${location.pathname === "/forum" ? "active-link" : ""}`}
              >
                Forum
              </Link>

              {/* DYNAMIC ACCOUNT DROPDOWN */}
              <NavDropdown
                className="account-dropdown"
                title={
                  <span className="custom-nav-link">
                    {/* Shows user name if logged in, otherwise 'Account' */}
                    {user ? `Hi, ${user.name || "User"}` : "Account"}{" "}
                    <FaChevronDown size={10} className="ms-1" />
                  </span>
                }
              >
                {!user ? (
                  <>
                    <NavDropdown.Item
                      onClick={openLogin}
                      className="login-item"
                    >
                      Log In
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={openRegister}>
                      Register
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item as={Link} to="/profile">
                      My Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      onClick={onLogout}
                      className="text-danger"
                    >
                      Logout
                    </NavDropdown.Item>
                  </>
                )}

                <NavDropdown.Item as={Link} to="/profile">
                  My Profile
                </NavDropdown.Item>
              </NavDropdown>

              <Link
                to="/cart"
                className={`custom-nav-link d-flex align-items-center gap-1 ${location.pathname === "/cart" ? "active-link" : ""}`}
              >
                Cart ({cart.length}) <FaShoppingCart size={18} />
              </Link>
            </Nav>
          </Container>
        </Navbar>

        {/* 3. CATEGORY BAR */}
        <div className="py-2" style={{ backgroundColor: "#F9A8D4" }}>
          <Container fluid>
            <Nav className="justify-content-center gap-4">
              {[
                "All categories",
                "Baby Fashion",
                "Toys",
                "Footwear & Accessories",
                "Moms & Baby care",
                "Furniture & Bedding",
                "Rental Services",
              ].map((cat) => (
                <Link
                  key={cat}
                  to="/shop"
                  className={`custom-nav-link category-link ${activeCategory === (cat === "All categories" ? "" : cat) ? "active-link" : ""}`}
                  onClick={() =>
                    onCategoryChange(cat === "All categories" ? "" : cat)
                  }
                >
                  {cat}{" "}
                  {cat !== "Toys" && cat !== "Rental Services" && (
                    <FaChevronDown size={8} />
                  )}
                </Link>
              ))}
            </Nav>
          </Container>
        </div>
      </header>

      {/* MODALS - Pass onLogin Success to LoginModal */}
      <LoginModal
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        switchToRegister={openRegister}
        onLoginSuccess={onLogin}
      />
      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
        switchToLogin={openLogin}
      />
    </>
  );
};

export default Header;
