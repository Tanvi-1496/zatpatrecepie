import React, { useEffect, useState } from "react";
import "../../../styles/Home/Hero/index.css";
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import blob from "../../../assets/Home/Hero/blob.png";
import jelly from "../../../assets/Home/Hero/jelly.png";
import cake from "../../../assets/Home/Hero/cake.png";
import brownie from "../../../assets/Home/Hero/brownie.png";

const Hero = () => {
  const images = [jelly, cake, brownie];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero_contentWrap">
        <h1 className="hero_heading">
          TASTY FOOD <br /> COMING TO YOU
        </h1>
        <p className="hero_subheading">
          Your time is precious, and we know your struggle only to get your{" "}
          favorite food. Get your job done and let us lesson your hustle!
        </p>

        <a className="hero_orderNow" href="all-products">
          ORDER NOW
        </a>

        <div className="hero_carousal --mobile">
          <div
            className="hero_carousal-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div className="floatWrap" key={i}>
                <img src={img} className="hero_carousal-img" />
              </div>
            ))}
          </div>
        </div>

        <ul className="hero_about">
          <li className="hero_aboutList">
            <p className="hero_aboutList-title">Products</p>
            <p className="hero_aboutList-desc">
              50<span className="plus">+</span>
            </p>
          </li>
          <li className="hero_aboutList">
            <p className="hero_aboutList-title">Youtube subscribers</p>
            <p className="hero_aboutList-desc">
              40k<span className="plus">+</span>
            </p>
          </li>
          <li className="hero_aboutList">
            <p className="hero_aboutList-title">Youtube views</p>
            <p className="hero_aboutList-desc">
              100k<span className="plus">+</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="hero_carousal">
        <div
          className="hero_carousal-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="floatWrap" key={i}>
              <img src={img} className="hero_carousal-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
