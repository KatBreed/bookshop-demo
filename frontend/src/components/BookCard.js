import React from "react";

const BookCard = ({ book, onAddToCart }) => {
  const handleAddToCart = () => {
    if(onAddToCart) {
      onAddToCart(book);
    } else {
      console.log("Added to Cart:", book);
    }
  };
  
  return (
    <div className="d-flex flex-column h-100">
      <div className="border p-2 rounded-lg shadow-sm w-100 mx-auto" style={{ maxWidth: "250px" }}>
        <img
          src = {book.image}
          loading = "lazy"
          alt={book.title || "Book cover"}
          style={{
            width: "150px",
            height: "auto",
            objectFit: "cover",
            display: "block",
            margin: "auto"
          }}
        />
        <p className="text-lg font-bold mt-2"><strong>{book.title || "Untitled"}</strong></p>
        <p className="text-sm text-gray-600">By {book.authors?.join(", ") || "Unknown Author"}</p>
        <p className="text-sm text-gray-600">{book.format || "Format unknown"}</p>
        <p className="font-bold mt-2"><strong>${book.price || "0.00"}</strong></p>
        <button className="btn btn-primary mt-2" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookCard;
