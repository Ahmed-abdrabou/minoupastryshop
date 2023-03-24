import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { ShopContext } from "../../container/context/shop-context";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { getTotalCartNumbers } = useContext(ShopContext);
  const TotalCartNumbers = getTotalCartNumbers();

  return (
    <nav className="app__content app__navbar">
      {/* MINOU-pastry-shop-text.png */}
      <Link to="/">
        <div className="app__navbar-logo-text">
          <div className="app__logo-title">
            <span>Minou</span>
            <span>Pastry Shop</span>
          </div>
        </div>
      </Link>
      <ul className="app__navbar-links">
        <li>
          <Link to="/">
            <a href="#Header">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/OrderNow">
            <a href="#OrderNow">Order A Cake</a>
          </Link>
        </li>
      </ul>
      <Link to="/">
        <div className="app__navbar-logo">
          <img src={images.logo2} alt="app__logo" />
        </div>
      </Link>
      <ul className="app__navbar-links">
        <li>
          <Link to="/MinouBox">
            <a href="#MinouBox">MinouBox</a>
          </Link>
        </li>
        <li>
          <a href="#BestSeller">Best Seller</a>
        </li>
      </ul>
      <div className="app__navbar-cart">
        <Link to="/cart">
          <img src={images.cart} alt="cart" />
        </Link>
        <div className="app__navbar-cart-count">
          <span>{TotalCartNumbers}</span>
        </div>
      </div>
      {/* burger menu */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#Cakes" onClick={() => setToggleMenu(false)}>
                  Cakes
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
