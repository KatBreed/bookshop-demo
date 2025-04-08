import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

const App = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch books from the server
    fetch("http://localhost:5000/books")
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error loading books:", error));
  }, []);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []); // Only run on mount

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]); // Only run when cart changes

  const handleAddToCart = (book) => {
    console.log('Adding to cart:', book);
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === book.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1, price: Number(book.price) }];
    });
  };  

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));
  };

  const handleFakePayment = () => {
    alert("Fake payment successful! Your order will be processed.");
    setCart([]);  // Clear the cart after fake payment
  };

  // Total quantity of ALL books. Not just unique books.
  const totalCartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Layout cartItemCount={totalCartQuantity}>
        <Routes>
          <Route
            exact
            path="/"
            element={<BookList books={books} cart={cart} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} onFakePayment={handleFakePayment} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
