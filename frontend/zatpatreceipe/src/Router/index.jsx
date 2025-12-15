import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Exploremore from "../sections/Home/Exploremore";
import AllProducts from "../pages/AllProducts";
import jelly from "../assets/Home/Hero/jelly.png";
import Cart from "../components/Cart";

const Router = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [cartProducts, setCartProducts] = useState(cart);

  cartOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const [cards, setCards] = useState([
    {
      id: 1,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "one",
    },
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "one",
    },
    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "one",
    },
    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "one",
    },
    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "one",
    },
    {
      id: 6,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "two",
    },
    {
      id: 7,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "two",
    },
    {
      id: 8,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "two",
    },

    {
      id: 9,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "two",
    },
    {
      id: 10,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "two",
    },
    {
      id: 11,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "three",
    },
    {
      id: 12,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "three",
    },
    {
      id: 13,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "three",
    },
    {
      id: 14,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "three",
    },
    {
      id: 15,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "four",
    },
    {
      id: 16,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "four",
    },

    {
      id: 17,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "four",
    },
    {
      id: 18,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "four",
    },
    {
      id: 19,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "four",
    },
    {
      id: 20,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "five",
    },

    {
      id: 21,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "five",
    },
    {
      id: 22,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "five",
    },
    {
      id: 23,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description: "sample text",
      category: "five",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCartOpen={setCartOpen}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
              setCards={setCards}
              cards={cards}
              cartOpen={cartOpen}
            />
          }
        />
        <Route path="about-us" element={<About />} />
        <Route
          path="all-products"
          element={
            <AllProducts
              setCards={setCards}
              cards={cards}
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {cartOpen && (
        <Cart
          cartProducts={cartProducts}
          setCartOpen={setCartOpen}
          setCartProducts={setCartProducts}
        />
      )}
    </BrowserRouter>
  );
};

export default Router;
