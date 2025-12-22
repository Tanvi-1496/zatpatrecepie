import React, { useState } from "react";
import "../../styles/Home/index.css";
import Nav from "../../components/Nav";
import Hero from "../../sections/Home/Hero";
import Categories from "../../sections/Home/Categories";
import Spclcategorys from "../../sections/Home/Spclcategorys";
import Exploremore from "../../sections/Home/Exploremore";
import Footer from "../../components/Footer";

const Home = ({
  cartOpen,
  setCartOpen,
  cartProducts,
  setCartProducts,
  setCards,
  cards,
}) => {
  return (
    <>
      <Nav setCartOpen={setCartOpen} cartProducts = {cartProducts} />
      <Hero />
      <Exploremore
        setCartOpen={setCartOpen}
        setCartProducts={setCartProducts}
        setCards={setCards}
        cards={cards}
      />
      {/* <Categories/>
  <Spclcategorys/> */}
    <Footer/>
    </>
  );
};

export default Home;
