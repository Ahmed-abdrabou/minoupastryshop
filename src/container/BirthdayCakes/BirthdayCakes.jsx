import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import "./BirthdayCakes.css";

import { BirthdayCakes_img } from "../../constants/BirthdayCakes_img";

const BirthdayCakes = () => {
  const navigate = useNavigate();
  const presshandleer = () => {
    navigate("/OrderNow");
    window.scrollTo(0, 0);
  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div
      className="section__padding section_container Small_flex_column_reverse   reveal"
      id="Cakes"
    >
      <div className="section_images_container">
        {BirthdayCakes_img.map((card, index) => {
          return (
            <div className="section_img" key={index}>
              <img src={card.image} alt="section_img" />
            </div>
          );
        })}
      </div>
      <div className="section_Text_container">
        <h2>Birthday Cakes</h2>
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

export default BirthdayCakes;
