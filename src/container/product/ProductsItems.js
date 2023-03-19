import React from "react";

// import { FloatingWhatsApp } from "react-floating-whatsapp";

// import { ProductsItems_img_Brownies } from "../../constants/ProductsItems_img_Brownies";

// import { ProductBrounies } from "./ProductBrounies";
// import { ProductCookies } from "./ProductCookies";
// import { ProductCupcakes } from "./ProductCupcakes";

import { ProductsItems_img } from "../../constants/ProductsItems_img";
import { Product } from "./Product";

import "./ProductsItems.css";

const ProductsItems = () => (
  <div className="section__content">
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

export default ProductsItems;
