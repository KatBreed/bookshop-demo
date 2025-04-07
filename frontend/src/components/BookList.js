import React, { useState, useEffect } from "react";
import BookCard from "./BookCard.js";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error loading books:", error));
  }, []);

  const handleAddToCart = (book) => {
    setCart(prevCart => {
      const exists = prevCart.find(item => item.id === book.id);
      if (exists) {
        alert(`${book.name} is already in the cart!`);
        return prevCart;
      }
      alert(`${book.name} added to cart!`);
      return [...prevCart, book];
    });
  };  

  return (
    <div>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-3 col-sm-6 mb-2" key={book.id}>
            <BookCard book={book} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
