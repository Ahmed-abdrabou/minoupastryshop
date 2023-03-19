import React, { useContext } from "react";

// import { ShopContext } from "../../container/context/shop-context";
import { MinouBoxItems } from "../../constants/MinouBoxItems";
import "./MinouBox.css";

const MinouBox = (props) => {
  // const { id, productName, price, productImage } = props.data;
  // const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  <div className="app__content MinouBox">
    <div className="section_header">
      <h1>MinouBox</h1>
    </div>
    <div className="MinouBox_Cards">
      {MinouBoxItems.map((card, index) => {
        return (
          <div className="MinouBox_Card" key={index}>
            <div className="MinouBox_img-container">
              <img src={card.productImage} alt="MinouBox_img" />
            </div>

            <h3 className="Card_Title">{card.productName}</h3>

            <p className="Card_Price">{card.price} LE</p>

            {/* <span className="custom__button" onClick={() => addToCart(id)}> */}
            {/* <span className="custom__button" onClick={() => addToCart(card.id)}>
              Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </span> */}
          </div>
        );
      })}
    </div>
  </div>;
};

export default MinouBox;
