import React, { useState, useEffect } from "react";
import BookCard from "./BookCard.js";

const BookList = ({ cart, onAddToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error loading books:", error));
  }, []);

  return (
    <div>
      <div className="row">
        {books.map((book) => (
          <div className="col-md-3 col-sm-6 mb-2" key={book.id}>
            <BookCard book={book} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
