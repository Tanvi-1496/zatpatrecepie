import React from "react";
import "../../../styles/Home/Categories/index.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {

  const navigate = useNavigate()

  const cardContent = [
    {
      title: "sd1",
    },
    {
      title: "sd2",
    },
    {
      title: "sd3",
    },
    {
      title: "sd4",
    },
    {
      title: "sd5",
    },
    {
      title: "sd6",
    },
    {
      title: "sd7",
    },
    {
      title: "sd8",
    },
  ];

  return (
    <div className="categories">
      <div className="categories__header">
        <h1>Love Our Categories</h1>
        <div className="btn">
          {" "}
          SHOW MORE
          {/* <button>Show more </button> */}
        </div>
      </div>

      <div className="categories__cardsContainer">
        {cardContent.map((card) => (
          <div className="categories__cards">{card.title}</div>
        ))}
      </div>
      <a href = "/about-us">Go to</a>
      <button onClick={() => navigate("about-us") } >Go to</button>
    </div>
  );
};

export default Categories;
