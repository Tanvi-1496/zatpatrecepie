import React from "react";
import '../../styles/Cardspage/index.css';
function Cards() {
  return (
    <div className="container">
      <div className="h1">
      <h1>Love Our Categories</h1>
      <div className="btn"> SHOW MORE 
        {/* <button>Show more </button> */}
      </div>
      </div>
      
      <div className="bigdiv">
        <div className="uppersmalldiv">
        <div className="SD1">
          sd1
        </div>

         <div className="SD2">
          sd2
        </div>

         <div className="SD3">
          sd3
        </div>

         <div className="SD4">
          sd4
        </div>
       </div>



      
        <div className="lowersmalldiv">
        <div className="SD5">
          sd1
        </div>

         <div className="SD6">
          sd2
        </div>

         <div className="SD7">
          sd3
        </div>

         <div className="SD8">
          sd4
        </div>
       </div>




      </div>



    </div>
  );
}
export default Cards;