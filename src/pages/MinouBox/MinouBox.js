import React from "react";

// import { FloatingWhatsApp } from "react-floating-whatsapp";

// import { MinouBox_img_Brownies } from "../../constants/MinouBox_img_Brownies";

// import { ProductBrounies } from "./ProductBrounies";
// import { ProductCookies } from "./ProductCookies";
// import { ProductCupcakes } from "./ProductCupcakes";

import { ProductsItems_img } from ".././../constants/ProductsItems_img";
import { Product } from "../../container/product/Product";

import "./MinouBox.css";

const MinouBox = () => (
  <div className="app__container section__padding MinouBox">
    <div className="section_header">
      <h1>MinouBox</h1>
    </div>
    <div className="ProductsItems_container">
      {ProductsItems_img.map((product) => (
        <Product data={product} />
      ))}
    </div>
  </div>
);

export default MinouBox;
