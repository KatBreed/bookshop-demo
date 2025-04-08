import React from 'react';

const Cart = ({ cart, onRemoveFromCart, onFakePayment }) => {
  console.log("Cart in Cart.js:", cart);

  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', background: '#f4f4f4', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty!</p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((book) => (
              <li key={book.id} style={{ display: 'flex', justifyContent: 'space-between', background: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                <div>
                  <p style={{ fontWeight: 'bold' }}>{book.title}</p>
                  <p>Price: ${Number(book.price).toFixed(2)}</p>
                  <p>Quantity: {book.quantity}</p>
                  <p><strong>Subtotal:</strong> ${(Number(book.price) * book.quantity).toFixed(2)}</p>
                </div>
                <button
                  style={{ background: 'red', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                  onClick={() => onRemoveFromCart(book.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p style={{ textAlign: 'center', fontSize: '1.2em', fontWeight: 'bold' }}>Total: ${totalPrice.toFixed(2)}</p>
          <button
            style={{ display: 'block', width: '100%', padding: '10px', background: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            onClick={onFakePayment}
          >
            Proceed to Fake Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;