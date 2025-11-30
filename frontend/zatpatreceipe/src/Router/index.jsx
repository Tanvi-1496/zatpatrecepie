import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="about-us" element = {<About />} />
        <Route path="*" element = {<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
