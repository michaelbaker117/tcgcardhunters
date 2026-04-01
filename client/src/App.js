import React, { useState } from 'react';
import PayPalButton from './PayPalButton';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    setCart([...cart, card]);
  };

  const removeFromCart = (cardId) => {
    setCart(cart.filter(card => card.id !== cardId));
  };

  const handleCheckout = () => {
    // Handle checkout process
  };

  return (
    <div>
      <h1>Card Catalog</h1>
      <div>
        {/* Sample cards, replace with your data logic */}
        {['Card 1', 'Card 2', 'Card 3'].map((card, index) => (
          <div key={index}>
            <h2>{card}</h2>
            <button onClick={() => addToCart({ id: index, name: card })}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} <button onClick={() => removeFromCart(item.id)}>Remove</button></li>
        ))}
      </ul>

      <h2>Checkout</h2>
      <PayPalButton amount={cart.length * 10} onSuccess={handleCheckout} /> {/* Assume each card costs 10 */}
    </div>
  );
};

export default App;