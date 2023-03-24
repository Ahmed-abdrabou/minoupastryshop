import React from "react";

// import { images } from "../../constants";
import "./Header.css";

import BackGroundSlider from "../BackGroundSlider/BackGroundSlider";
import { BackGround_images } from "../../constants/BackGround_images";

const Header = () => (
  <div className="app__content app__header" id="Header">
    <div className="app__header-text">
      <h2>Cake Your Day;</h2>
      <p>
        For our desserts we always use only the natural ingredients, Our
        production is 100% handmade
      </p>
      <p>Made For You With Love...&hearts;</p>

      <span className="custom__button header-foot_button">
        <a href="#OrderNow">Order Now..</a>
      </span>
    </div>

    <BackGroundSlider slides={BackGround_images} />
    <div className="header-foot">
      <span className="header-foot-bg"></span>
    </div>
  </div>
);

export default Header;
