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
    <div className="app__container section__padding Cart" id="ShoppingCart">
      <div className="CartContainer_header">
        <h1>Your Shooping Cart</h1>
      </div>
      <div className="CartContainer">
        <div className="Items">
          {ProductsItems_img.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
        </div>
        {totalAmount > 0 ? (
          <div className="CartControl">
            <div className="CartControl_text">
              <div className="CartControl_text_holder">
                <div className="CartControl_text_p">Total Items:</div>
                <div className="CartControl_text_p">
                  <span>{totalNumbers}</span> Items
                </div>
              </div>
              <div className="CartControl_text_holder">
                <div className="CartControl_text_p">Subtotal: </div>
                <div className="CartControl_text_p">
                  EGP <span>{totalAmount.toFixed(2)}</span>
                </div>
              </div>
              <div className="CartControl_text_holder">
                <div className="CartControl_text_p">deleviry fees:</div>
                <div className="CartControl_text_p">
                  EGP <span>{DeliveryFess.toFixed(2)}</span>
                </div>
              </div>
              <div className="CartControl_text_holder">
                <div className="CartControl_text_p">
                  <big style={{ fontWeight: "bold" }}>Total:</big>
                </div>
                <div className="CartControl_text_p">
                  EGP <span>{(totalAmount + DeliveryFess).toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="CartControl_buttons">
              <span
                className="custom__button"
                onClick={() => navigate("/minoupastryshop")}
              >
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
          <h1>Shooping Cart is Empty</h1>
        )}
      </div>
    </div>
  );
};
