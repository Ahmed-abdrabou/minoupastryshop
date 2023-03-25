import React from "react";
import { useNavigate } from "react-router-dom";

import "./MiniCakes.css";

import { MiniCakes_img } from "../../constants/MiniCakes_img";

const MiniCakes = () => {
  const navigate = useNavigate();

  const presshandleer = () => {
    navigate("/OrderNow");
    window.scrollTo(0, 0);
  };
  return (
    <div className="section__padding section_container Small_flex_column_reverse MiniCakes">
      <div className="section_images_container">
        {MiniCakes_img.map((card, index) => {
          return (
            <div className="section_img " key={index}>
              <img src={card.image} alt="section_img" />
            </div>
          );
        })}
      </div>
      <div className="section_Text_container">
        <h2>Mini Cakes</h2>
        <h3>Make your occasion extra special</h3>
        <p>
          We offer specially designed cakes for those of you looking for more
          than an ordinary cake. Whether you are throwing a surprise party,
          celebrating a birthday, engagement or getting married, we are sure to
          create a beautiful and unique cake for your special occasion.
        </p>
        <span className="custom__button " onClick={presshandleer}>
          Order Now..
        </span>
      </div>
    </div>
  );
};

export default MiniCakes;
