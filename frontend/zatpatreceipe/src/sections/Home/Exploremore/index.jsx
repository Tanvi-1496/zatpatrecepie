import React, { useState } from "react";
import "../../../styles/Home/Exploremore/index.css";
import jelly from "../../../assets/Home/Hero/jelly.png";

const Exploremore = ({ setCartOpen, setCartProducts }) => {
  const cardContent1 = [
    {
      id: 1,
      img: jelly,
      title: "jelly",
      price: 250,
      description: "sample text",
    },
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      description: "sample text",
    },
    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      description: "sample text",
    },
    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      description: "sample text",
    },
    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      description: "sample text",
    },
  ];

  const cardContent2 = [
    {
      id: 1,
      img: jelly,
      title: "jelly",
      price: 250,
      description: "sample text",
    },
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      description: "sample text",
    },
    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      description: "sample text",
    },

    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      description: "sample text",
    },
    {
      id: 6,
      img: jelly,
      title: "Chocolate",
      price: 500,
      description: "sample text",
    },
  ];

  const cardContent3 = [
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      description: "sample text",
    },
    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      description: "sample text",
    },
    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      description: "sample text",
    },
    {
      id: 6,
      img: jelly,
      title: "Chocolate",
      price: 500,
      description: "sample text",
    },
  ];

  const cardContent4 = [
    {
      id: 1,
      img: jelly,
      title: "jelly",
      price: 250,
      description: "sample text",
    },
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      description: "sample text",
    },

    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      description: "sample text",
    },
    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      description: "sample text",
    },
    {
      id: 6,
      img: jelly,
      title: "Chocolate",
      price: 500,
      description: "sample text",
    },
  ];

  const cardContent5 = [
    {
      id: 1,
      img: jelly,
      title: "jelly",
      price: 250,
      description: "sample text",
    },

    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      description: "sample text",
    },
    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      description: "sample text",
    },
    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      description: "sample text",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
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
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="productss_container">
          {/* {cardContent.map((card) => (
        <div className='card_item'>{card.title}</div>))} */}

          {activeIndex == 0 &&
            cardContent1.map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">Rs. {card.price}</p>
                    <select name="quantity" id="quantity">
                      <option>250gm</option>
                      <option>500gm</option>
                      <option>750gm</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
                      setCartProducts((prev) => [...prev, card]);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="buynow">Buy Now</button>
                </div>
              </div>
            ))}

          {activeIndex == 1 &&
            cardContent2.map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">Rs. {card.price}</p>
                    <select name="quantity" id="quantity">
                      <option>250gm</option>
                      <option>500gm</option>
                      <option>750gm</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
                      setCartProducts((prev) => [...prev, card]);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="buynow">Buy Now</button>
                </div>
              </div>
            ))}

          {activeIndex == 2 &&
            cardContent3.map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">Rs. {card.price}</p>
                    <select name="quantity" id="quantity">
                      <option>250gm</option>
                      <option>500gm</option>
                      <option>750gm</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
                      setCartProducts((prev) => [...prev, card]);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="buynow">Buy Now</button>
                </div>
              </div>
            ))}

          {activeIndex == 3 &&
            cardContent4.map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">Rs. {card.price}</p>
                    <select name="quantity" id="quantity">
                      <option>250gm</option>
                      <option>500gm</option>
                      <option>750gm</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
                      setCartProducts((prev) => [...prev, card]);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button className="buynow">Buy Now</button>
                </div>
              </div>
            ))}

          {activeIndex == 4 &&
            cardContent5.map((card) => (
              <div className="product_item">
                <img src={card.img} className="product_img" alt="jelly image" />
                <div className="product_content">
                  <p className="product_title">{card.title}</p>
                  <div className="product_price_quantity">
                    <p className="price">Rs. {card.price}</p>
                    <select name="quantity" id="quantity">
                      <option>250gm</option>
                      <option>500gm</option>
                      <option>750gm</option>
                      <option>1kg</option>
                    </select>
                  </div>
                  {/* <p className='product_desc'>
                   {card.description}
                  </p> */}
                  <button
                    className="addtocart"
                    onClick={() => {
                      setCartOpen(true);
                      setCartProducts((prev) => [...prev, card]);
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
