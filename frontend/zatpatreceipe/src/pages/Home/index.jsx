import React, { useState } from "react";
import "../../styles/Home/index.css";
import Nav from "../../sections/Home/Nav";
import Hero from "../../sections/Home/Hero";
import Categories from "../../sections/Home/Categories";
import Spclcategorys from "../../sections/Home/Spclcategorys";
import Exploremore from "../../sections/Home/Exploremore";


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
      <Nav setCartOpen={setCartOpen} />
      <Hero />
      <Exploremore
        setCartOpen={setCartOpen}
        setCartProducts={setCartProducts}
        setCards={setCards}
        cards={cards}
      />

      {/* <Categories/>
  <Spclcategorys/> */}
    </>
  );
};

export default Home;
