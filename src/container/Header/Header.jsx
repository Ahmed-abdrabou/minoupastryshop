import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

// import BackGroundSlider from "../BackGroundSlider/BackGroundSlider";
// import { BackGround_images } from "../../constants/BackGround_images";
import VideoSection from "../VideoSection/VideoSection";

const Header = () => {
  const navigate = useNavigate();
  const presshandleer = () => {
    navigate("/OrderNow");
    window.scrollTo(0, 0);
  };
  return (
    <div className="app__content app__header" id="Header">
      <div className="app__header-text">
        <h2>Cake Your Day;</h2>
        <p>
          For our desserts we always use only the natural ingredients, Our
          production is 100% handmade
        </p>
        <p>Made For You With Love...&hearts;</p>

        <span
          className="custom__button header-foot_button"
          onClick={presshandleer}
        >
          Order Now..
        </span>
      </div>

      {/* <BackGroundSlider slides={BackGround_images} /> */}
      <VideoSection />
      <div className="header-foot">
        <span className="header-foot-bg"></span>
      </div>
    </div>
  );
};

export default Header;
