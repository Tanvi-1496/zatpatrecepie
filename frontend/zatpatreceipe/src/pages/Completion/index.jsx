import React from "react";
import { GiCakeSlice } from "react-icons/gi";
import '../../styles/Completion/index.css'

const Completion = () => {
  return (
    <section className="completion">
      <div className="completion_icon">
        <GiCakeSlice />
      </div>
      <p className="completion_text">Your payment is under review!!!</p>
      <a className="completion_btn" href = "/">View other products</a>
    </section>
  );
};

export default Completion;
