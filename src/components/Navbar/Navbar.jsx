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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/OrderNow">Order A Cake</Link>
        </li>
      </ul>
      <Link to="/">
        <div className="app__navbar-logo">
          <img src={images.logo2} alt="app__logo" />
        </div>
      </Link>
      <ul className="app__navbar-links">
        <li>
          <Link to="/MinouBox">MinouBox</Link>
        </li>
        <li>
          <Link to="/Cart">Shopping Cart</Link>
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
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/OrderNow" onClick={() => setToggleMenu(false)}>
                  Order A Cake
                </Link>
              </li>
              <li>
                <Link to="/MinouBox" onClick={() => setToggleMenu(false)}>
                  MinouBox
                </Link>
              </li>
              <li>
                <Link to="/Cart" onClick={() => setToggleMenu(false)}>
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
