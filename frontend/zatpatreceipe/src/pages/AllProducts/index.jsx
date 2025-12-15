import React, { useState } from "react";
import "../../styles/AllProducts/index.css";
import { calcPriceAccToWeight } from "../../sections/Home/Exploremore";

const AllProducts = ({
  cards,
  setCards,
  setCartOpen,
  cartOpen,
  setCartProducts,
  cartProducts,
}) => {
  const addToCart = (card) => {
    setCartOpen(true);
    setCartProducts((prev) => {
      const exists = prev.find(
        (p) => p.id === card.id && p.weight === card.weight
      );

      if (exists) {
        return prev.map((prod) =>
          prod.id === card.id && prod.weight === card.weight
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      }
      return [...prev, { ...card, quantity: 1, weight: card.weight }];
    });
  };

  const handleWeights = (id, w) => {
    setCards((prev) =>
      prev.map((p) => (p.id === id ? { ...p, weight: w } : p))
    );
  };

  const [activeCat, setActiveCat] = useState("one");

  return (
    <div className="products">
      {/* LEFT SIDEBAR */}
      <div className="products_categories">
        {["one", "two", "three", "four", "five"].map((label) => (
          <button
            key={label}
            className={`products_cat ${activeCat === label ? "active" : ""}`}
            onClick={() => setActiveCat(label)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* RIGHT PRODUCTS GRID */}
      <div className="products_grid">
        {cards
          .filter((card) => card.category === activeCat)
          .map((card) => (
            <div className="product_item" key={card.id}>
              <img src={card.img} className="product_img" alt={card.title} />

              <div className="product_content">
                <p className="product_title">{card.title}</p>

                <div className="product_price_quantity">
                  <p className="price">
                    ₹{card.price * calcPriceAccToWeight(card.weight)}
                  </p>

                  <select
                    value={card.weight || 250}
                    onChange={(e) =>
                      handleWeights(card.id, Number(e.target.value))
                    }
                  >
                    <option value={250}>250gm</option>
                    <option value={500}>500gm</option>
                    <option value={750}>750gm</option>
                    <option value={1000}>1kg</option>
                  </select>
                </div>

                <button
                  className="addtocart"
                  onClick={() => {
                    addToCart(card);
                  }}
                >
                  Add to Cart
                </button>

                <button className="buynow">Buy Now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
