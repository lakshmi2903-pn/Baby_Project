import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const Sidebar = ({ filters, toggleArrayFilter, updateSingleFilter, clearAll }) => {
  return (
    <Col md={3} lg={2}>
      <div className="bg-white p-3 border rounded shadow-sm mb-4" style={{ height: "fit-content" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold m-0">Filters</h5>
          <Button variant="link" className="p-0 text-decoration-none text-muted small" onClick={clearAll}>
            Clear All
          </Button>
        </div>

        {/* GENDER */}
        <FilterGroup title="Gender">
          {["Boy", "Girl"].map((g) => (
            <Form.Check 
              key={g} 
              type="checkbox" 
              label={g} 
              checked={filters.gender.includes(g)} 
              onChange={() => toggleArrayFilter("gender", g)} 
            />
          ))}
        </FilterGroup>

        {/* AGE GROUP */}
        <FilterGroup title="Age group">
          {["0-6 months", "7-12 months", "Kids", "Adults"].map((a) => (
            <Form.Check 
              key={a} 
              type="checkbox" 
              label={a} 
              checked={filters.age_group.includes(a)} 
              onChange={() => toggleArrayFilter("age_group", a)} 
            />
          ))}
        </FilterGroup>

        {/* BRANDS */}
        <FilterGroup title="Brands">
          <div style={{ maxHeight: "120px", overflowY: "auto", border: "1px solid #eee", padding: "5px" }}>
            {["Babyhug", "Babyjoy", "Kookie kids", "Carter's", "Dapper Dudes", "Mothercare"].map((b) => (
              <Form.Check 
                key={b} 
                type="checkbox" 
                label={b} 
                checked={filters.brand.includes(b)} 
                onChange={() => toggleArrayFilter("brand", b)} 
              />
            ))}
          </div>
        </FilterGroup>

        {/* COLOR */}
        <FilterGroup title="Color">
          {[{ name: "Blue", hex: "#007bff" }, { name: "White", hex: "#fff" }, { name: "Red", hex: "#dc3545" }].map((c) => (
            <div key={c.name} className="d-flex align-items-center mb-1">
              <Form.Check 
                type="checkbox" 
                checked={filters.color.includes(c.name)} 
                onChange={() => toggleArrayFilter("color", c.name)} 
              />
              <span style={{ width: "12px", height: "12px", background: c.hex, border: "1px solid #ccc", borderRadius: "50%", margin: "0 8px" }}></span>
              <span className="small">{c.name}</span>
            </div>
          ))}
        </FilterGroup>

        {/* PRICE */}
        <FilterGroup title="Price">
          {["0-250", "251-1000", "1001-3000"].map((p) => (
            <Form.Check 
              key={p} 
              type="radio" 
              name="price" 
              label={`₹ ${p}`} 
              checked={filters.price === p} 
              onChange={() => updateSingleFilter("price", p)} 
            />
          ))}
        </FilterGroup>
      </div>
    </Col>
  );
};

// Internal Helper Component for Section Headers
const FilterGroup = ({ title, children }) => (
  <div className="mb-4 border-bottom pb-3">
    <h6 className="fw-bold small text-uppercase text-muted mb-2">{title}</h6>
    <div className="ps-1">{children}</div>
  </div>
);

export default Sidebar;
