import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import Header from "./components/MainHeader";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import ContactPage from "./components/Contact";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import ProductDetail from "./components/ProductDetailPage";
import Forum from "./components/Forum";
import Profile from "./components/Profile";
// Wrapper to find the clicked product
const ProductDetailWrapper = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product)
    return <div className="text-center p-5 mt-5">Product not found.</div>;
  return <ProductDetail product={product} />;
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- 1. USER STATE MANAGEMENT ---
  const [user, setUser] = useState(null);

  // Check if a user is already logged in (Persistent Login)
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // --- 2. PRODUCT FILTERS ---
  const [filters, setFilters] = useState({
    category__name: "Baby Fashion",
    gender: [],
    age_group: [],
    brand: [],
    color: [],
    price: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else if (value) {
          params.append(key, value);
        }
      });

      try {
        const res = await axios.get(
          `https://lakshu.pythonanywhere.com/api/products/?${params.toString()}`,
        );
        setProducts(res.data);
      } catch (err) {
        console.error("API Error:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, [filters]);

  const handleCategoryChange = (newCategory) => {
    setFilters({
      category__name: newCategory,
      gender: [],
      age_group: [],
      brand: [],
      color: [],
      price: "",
    });
  };

  const toggleArrayFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((i) => i !== value)
        : [...prev[key], value],
    }));
  };

  const updateSingleFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const clearAll = () =>
    setFilters({
      category__name: "",
      gender: [],
      age_group: [],
      brand: [],
      color: [],
      price: "",
    });

  return (
    <CartProvider>
      <Router>
        {/* --- 3. PASS USER PROPS TO HEADER --- */}
        <Header
          onCategoryChange={handleCategoryChange}
          activeCategory={filters.category__name}
          user={user}
          onLogout={handleLogout}
          onLogin={handleLogin}
        />

        <div style={{ marginTop: "180px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route
              path="/product/:id"
              element={<ProductDetailWrapper products={products} />}
            />
            <Route
              path="/shop"
              element={
                <Container fluid className="p-4 bg-light">
                  <Row>
                    <Sidebar
                      filters={filters}
                      toggleArrayFilter={toggleArrayFilter}
                      updateSingleFilter={updateSingleFilter}
                      clearAll={clearAll}
                    />
                    <ProductGrid
                      products={products}
                      loading={loading}
                      currentCategory={filters.category__name}
                    />
                  </Row>
                </Container>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
