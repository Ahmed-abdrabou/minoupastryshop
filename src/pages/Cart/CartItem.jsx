import React, { useContext } from "react";
import { ShopContext } from "../../container/context/shop-context";

import "./CartItem.css";

export const CartItem = (props) => {
  const {
    id,
    productName,
    productDescription,
    price,
    pricedescription,
    productImage,
  } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem_card">
      <div className="Product_container">
        <div className="product_img-container">
          <img src={productImage} />
        </div>

        <div className="description">
          <p className="product_Title">{productName}</p>
          <p className="product_Description">{productDescription}</p>
          <p className="product_Price">
            {pricedescription} : EGP {price.toFixed(2)}
          </p>
          <div className="countHandler">
            <span className="custom__button" onClick={() => removeFromCart(id)}>
              -
            </span>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <span className="custom__button" onClick={() => addToCart(id)}>
              +
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
