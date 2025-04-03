import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="d-flex flex-coloumn h-100">
      <div className="border p-2 rounded-lg shadow-sm w-100 mx-auto" style={{maxWidth:"250px"}}>
        <img src={book.image ? `http://localhost:5000/${book.image}` : "/placeholder.jpg"} alt={book.name} style={{width: "150px", height: "auto", objectFit: "cover", display: "block", margin: "auto"}} />
        <p className="text-lg font-bold mt-2"><strong>{book.name}</strong></p>
        <p className="text-sm text-gray-600">By {book.authors.join(", ")}</p>
        <p className="text-sm text-gray-600">{book.format}</p>
        <p className="font-bold mt-2"><strong>${book.price}</strong></p>
        <button className="btn btn-primary mt-2">Add to Cart</button>
      </div>
    </div>
    
  );
};

export default BookCard;
