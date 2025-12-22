import React, { useState } from "react";
import "../../styles/AllProducts/index.css";
import { calcPriceAccToWeight } from "../../sections/Home/Exploremore";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

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

  const navigate = useNavigate();

  const handleBuyNow = (e, cart) => {
    e.stopPropagation();
    setCartProducts(cart);
    localStorage.setItem("cart", JSON.stringify([cart]));

    navigate("/personal-details");
  };

  return (
    <div className="productsContainer">
      <Nav setCartOpen={setCartOpen} cartProducts = {cartProducts} />
      <h1 className="products_heading">All Products</h1>
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

        <h1 className="products_heading --productsMobile">All Products</h1>

        {/* RIGHT PRODUCTS GRID */}
        <div className="products_grid">
          {cards
            .filter((card) => card.category === activeCat)
            .map((card) => (
              <div
                className="product_item"
                key={card.id}
                onClick={() =>
                  navigate(`/product/${card.id + "/" + card.category}`)
                }
              >
                <img src={card.img} className="product_img" alt={card.title} />

                <div className="product_content">
                  <p className="product_title">{card.title}</p>

                  <div className="product_price_quantity">
                    <p className="price">
                      ₹{card.price * calcPriceAccToWeight(card.weight)}
                    </p>

                    <select
                      value={card.weight || 250}
                      onClick={(e) => e.stopPropagation()}
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
                      e.stopPropagation();
                      addToCart(card);
                    }}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="buynow"
                    onClick={(e) => handleBuyNow(e, card)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
