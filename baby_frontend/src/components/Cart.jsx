import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-5 pt-5">
      <h2 className="fw-bold mb-4">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table responsive borderless>
            <thead>
              <tr className="border-bottom">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-bottom align-middle">
                  <td>{item.name}</td>
                  <td>₹ {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹ {item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end mt-4">
            <h4>Total: ₹ {total}</h4>
            <Button variant="dark" className="px-5 py-2 mt-2">
              Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
