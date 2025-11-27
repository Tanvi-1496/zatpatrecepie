import React from "react";
import Leaf1 from "../../../assets/Home/Hero/leaf-1.svg";
import Leaf2 from "../../../assets/Home/Hero/leaf-2.svg";
import Leaf3 from "../../../assets/Home/Hero/leaf-3.svg";
import Leaf4 from "../../../assets/Home/Hero/leaf-4.svg";
import BlueBerry from "../../../assets/Home/Hero/BlueBerry.svg";
import Donuts from "../../../assets/Home/Hero/Donuts.png";
import "../../../styles/Home/Hero/index.css";
function Hero() {
  return (
    <div className="hero__container">
      <h1 className="hero__container-heading">BLUEBERRY</h1>

      <div className="hero__leafCon">
        <div className="hero__leafBox">
          <img src = {Leaf1} />
          <img src = {Leaf2} />
        </div>
        <img src={Donuts} alt="Donuts" className="hero__donut" />
        <div className="hero__leafBox">
        <img src = {Leaf3} />
        <img src = {Leaf4} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
