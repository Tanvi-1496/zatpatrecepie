import React from "react";
import "../../styles/Loader/index.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="burger-loader">
        <div className="bun top"></div>
        <div className="patty"></div>
        <div className="bun bottom"></div>
      </div>
    </div>
  );
};

export default Loader;
