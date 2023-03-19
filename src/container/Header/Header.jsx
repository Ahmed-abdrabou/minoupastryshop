import React from "react";

// import { images } from "../../constants";
import "./Header.css";

import BackGroundSlider from "../BackGroundSlider/BackGroundSlider";
import { BackGround_images } from "../../constants/BackGround_images";

const Header = () => (
  <div className="app__content app__header">
    <div className="app__header-text">
      <h2>Cack Your Day;</h2>
      <p>
        For our desserrts we always use only the natural ingredients, Our
        production is 100% handmade
      </p>
      <p>Made For You With Love...&hearts;</p>
    </div>

    <BackGroundSlider slides={BackGround_images} />
    <div className="header-foot">
      <span className="header-foot-bg"></span>
      <span className="custom__button header-foot_button">Order Now..</span>
    </div>
  </div>
);

export default Header;
