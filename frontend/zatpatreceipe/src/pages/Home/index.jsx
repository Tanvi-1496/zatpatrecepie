import React, { useState } from "react";
import "../../styles/Home/index.css";
import Nav from "../../sections/Home/Nav";
import Hero from "../../sections/Home/Hero";
import Categories from "../../sections/Home/Categories";
import Spclcategorys from "../../sections/Home/Spclcategorys";
import Exploremore from "../../sections/Home/Exploremore";
import Cart from "../../components/Cart";

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  return (
    <>
      <Nav setCartOpen={setCartOpen} />
      <Hero/>   
      <Exploremore
        setCartOpen={setCartOpen}
        setCartProducts={setCartProducts}
      />
      {cartOpen && (
        <Cart
          cartProducts={cartProducts}
          setCartOpen={setCartOpen}
          setCartProducts={setCartProducts}
        />
      )}
      {/* <Categories/>
  <Spclcategorys/> */}
    </>
  );
};

export default Home;
