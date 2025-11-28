import React from 'react'
import '../../../styles/Home/Spclcategorys/index.css'

const Spclcategorys = () => {

  
    const cardcontent=[
    {
      title: "sd1",
    },
    {
      title: "sd2",
    },
    {
      title: "sd3",
    },
  ];
  return (
    <div className="Spclcategories_container">
      <div className="Spclcategorys_header">
          <h1>LOVE OUR CATEGORIES!</h1>

          <div className="btn">
            SHOW MORE!
          </div>



      
      </div>
       <div className="Spclcategorys_cards_container">
         {
         cardcontent.map((card) => (
          <div className="Spclcategorys_cards">{card.title}
          
          
          </div>
         ))}


      </div>
    


    </div> 


  )
}

export default Spclcategorys