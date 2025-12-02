import React from 'react'
import "../../styles/Cart/index.css"

const Cart = ({ cartProducts, setCartOpen }) => {
  return (
    <div className="cart_container">
      {cartProducts.map((card) => (
        <div>{card.title}</div>
      ))}

      <button onClick={() => setCartOpen(false)}> Close</button>
    </div>
  );
};

export default Cart