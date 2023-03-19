import React, { useContext } from "react";
import { ShopContext } from "../../container/context/shop-context";
import { ProductsItems_img } from "../../constants/ProductsItems_img";

import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";

import "./CartContainer.css";

export const CartContainer = () => {
  const {
    cartItems,
    getTotalCartAmount,
    // checkout,
    getTotalCartNumbers,
    randomId,
  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalNumbers = getTotalCartNumbers();
  const navigate = useNavigate();

  const DeliveryFess = 30;

  return (
    <div className="app__container section__padding Cart">
      <div className="CartContainer_header">
        <h1>Your Shooping Cart</h1>
      </div>
      <div className="CartContainer">
        <div className="ProductsItems_container ">
          {ProductsItems_img.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="CartControl">
            <p>
              Total Items: <span>{totalNumbers}</span> Items
            </p>
            <p>
              Subtotal: EGP <span>{totalAmount.toFixed(2)}</span>
            </p>
            <p>
              deleviry fees: EGP <span>{DeliveryFess.toFixed(2)}</span>
            </p>

            <p>
              Total: EGP <span>{(totalAmount + DeliveryFess).toFixed(2)}</span>
            </p>
            <div className="CartControl_buttons">
              <span className="custom__button" onClick={() => navigate("/")}>
                Continue Shopping
              </span>
              <span
                className="custom__button"
                onClick={() => {
                  // checkout();
                  navigate("/CheckOutByEmail");
                }}
              >
                Go To Checkout
              </span>
            </div>
            {/* <input type="text" value={Math.random().toString()} /> */}
          </div>
        ) : (
          <h1>vv </h1>
        )}
      </div>
    </div>
  );
};
