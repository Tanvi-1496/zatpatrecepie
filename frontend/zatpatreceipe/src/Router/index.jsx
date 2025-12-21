import React, { useState } from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Exploremore from "../sections/Home/Exploremore";
import AllProducts from "../pages/AllProducts";
import jelly from "../assets/Home/Hero/jelly.png";
import Cart from "../components/Cart";
import Product from "../pages/Product";
import PersonalDetails from "../pages/PersonalDetails";
import OrderSum from "../pages/OrderSum";
import Payment from "../pages/Payment";
import Completion from "../pages/Completion";
import Signup from "../pages/Admin/Signup";
import Login from "../pages/Admin/Login";
import Dashboard from "../pages/Admin/Dashboard";
import Order from "../pages/Admin/Order";
import Orders from "../pages/Admin/Orders";
import AddProduct from "../pages/Admin/AddProduct";
import ProtectedRoute from "./ProtectRoute";

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
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "one",
    },
    {
      id: 2,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "one",
    },
    {
      id: 3,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "one",
    },
    {
      id: 4,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "one",
    },
    {
      id: 5,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "one",
    },
    {
      id: 6,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "two",
    },
    {
      id: 7,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "two",
    },
    {
      id: 8,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "two",
    },

    {
      id: 9,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "two",
    },
    {
      id: 10,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "two",
    },
    {
      id: 11,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "three",
    },
    {
      id: 12,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "three",
    },
    {
      id: 13,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "three",
    },
    {
      id: 14,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "three",
    },
    {
      id: 15,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "four",
    },
    {
      id: 16,
      img: jelly,
      title: "cake",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "four",
    },

    {
      id: 17,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "four",
    },
    {
      id: 18,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "four",
    },
    {
      id: 19,
      img: jelly,
      title: "Chocolate",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "four",
    },
    {
      id: 20,
      img: jelly,
      title: "jelly",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "five",
    },

    {
      id: 21,
      img: jelly,
      title: "Drink",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "five",
    },
    {
      id: 22,
      img: jelly,
      title: "Donot",
      price: 500,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      category: "five",
    },
    {
      id: 23,
      img: jelly,
      title: "Milkshake",
      price: 250,
      weight: 250,
      quantity: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        <Route path="about-us" element={<About setCartOpen={setCartOpen} />} />
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
        <Route path="personal-details" element={<PersonalDetails />} />
        <Route path="order-summary" element={<OrderSum cart={cart} />} />
        <Route path="payment" element={<Payment />} />
        <Route path="completion" element={<Completion />} />

        <Route
          path="product/:id/:cat"
          element={
            <Product
              setCards={setCards}
              cards={cards}
              setCartOpen={setCartOpen}
              cartOpen={cartOpen}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          }
        />

        <Route path="myadmin-signup" element={<Signup />} />
        <Route path="myadmin-login" element={<Login />} />
        <Route
          path="admin-dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="orders" element={<Orders />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="order/:id" element={<Order />} />
        </Route>

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
