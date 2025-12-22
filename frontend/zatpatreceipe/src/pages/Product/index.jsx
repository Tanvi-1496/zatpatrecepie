import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/Product/index.css";
import { useNavigate } from "react-router-dom";
import { calcPriceAccToWeight } from "../../sections/Home/Exploremore";

const Product = ({ setCartOpen, setCartProducts, cards, setCards }) => {
  const { id } = useParams();
  const { cat } = useParams();
  const navigate = useNavigate();

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

  const handleBuyNow = (e, cart) => {
    e.stopPropagation();
    setCartProducts(cart);
    localStorage.setItem("cart", JSON.stringify([cart]));

    navigate("/personal-details");
  };

  return (
    <section className="prod">
      {cards
        .filter((card) => card.id === Number(id))
        .map((card) => (
          <div className="prod_productDetails">
            <div className="prod_productDetails-imgCont">
              <img className="prod_productDetails-img" src={card.img} />

              <button
                className="addtocart --mobileBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCartOpen(true);
                  addToCart(card);
                }}
              >
                Add to Cart
              </button>

              <button className="buynow --mobileBtn">Buy Now</button>
            </div>

            <div className="prod_productDetails-detail">
              <h2 className="prod_productDetails-heading">{card.title}</h2>
              <p className="prod_productDetails-desc">{card.description}</p>
              <div className="prod_productDetails-priceQuantity">
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
                className="addtocart --desktopBtn"
                onClick={(e) => {
                  e.stopPropagation();
                  setCartOpen(true);
                  addToCart(card);
                }}
              >
                Add to Cart
              </button>

              <button
                className="buynow --desktopBtn"
                onClick={(e) => handleBuyNow(e, card)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}

      <p className="prod_related">Related products</p>

      <div className="prod_relatedProds">
        {cards
          .filter((card) => card.category === cat && card.id !== Number(id))
          .map((card) => (
            <div
              className="product_item"
              onClick={() =>
                navigate(`/product/${card.id + "/" + card.category}`)
              }
            >
              <img src={card.img} className="product_img" alt="jelly image" />
              <div className="product_content">
                <p className="product_title">{card.title}</p>
                <div className="product_price_quantity">
                  <p className="price">
                    Rs.{card.price * calcPriceAccToWeight(card.weight)}
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
                {/* <p className='product_desc'>
                              {card.description}
                              </p> */}
                <button
                  className="addtocart"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCartOpen(true);
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
    </section>
  );
};

export default Product;
