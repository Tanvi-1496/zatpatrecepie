import React, { useState, useEffect } from "react";
import "../../../styles/Home/Exploremore/index.css";


export const calcPriceAccToWeight = (weight) => {
  switch (weight) {
    case 250:
      return 1;
    case 500:
      return 2;
    case 750:
      return 3;
    case 1:
      return 4;
  }
};

const Exploremore = ({ setCartOpen, setCartProducts, cards, setCards }) => {
  const [activeCat, setActiveCat] = useState("one");
 

  const addToCart = (card) => {
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

  return (
    <div className="exploremore_container">
      <div className="explore_heading">
        <h1>Explore More! </h1>{" "}
      </div>
      <div className="products_container">
        <div className="horizontal_bar">
          {["one", "two", "three", "four", "five"].map((label, index) => (
            <button
              key={index}
              className={`navigation_btns ${
                activeCat === label ? "active" : ""
              }`}
              onClick={() => setActiveCat(label)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="productss_container">
          {/* {cardContent.map((card) => (
        <div className='card_item'>{card.title}</div>))} */}
          {cards
            .filter((card) => card.category === activeCat)
            .map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">
                      Rs.{card.price * calcPriceAccToWeight(card.weight)}
                    </p>
                    <select
                      onChange={(e) =>
                        handleWeights(card.id, e.target.value)
                      }
                    >
                      <option selected value={250}>
                        250gm
                      </option>
                      <option value={500}>500gm</option>
                      <option value={750}>750gm</option>
                      <option value={1}>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
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
    </div>
  );
};

export default Exploremore;
