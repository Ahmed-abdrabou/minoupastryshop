import React from "react";

import { FloatingWhatsApp } from "react-floating-whatsapp";

import {
  // MainDiscountBar,
  Header,
  // SessonSlides,
  // BestSeller,
  // SpecialOrderCakes,
  SpecialOccasionCakes,
  BirthdayCakes,
  WeddingCakes,
  MiniCakes,
  MinouBox,
} from "../../container";

// import ShoppingCart from "../container/ShoppingCart/ShoppingCart";
import Slideshow from "../../container/Slideshow/Slideshow";
import ProductsItems from "../../container/product/ProductsItems";
import "./Shop.css";

const Shop = () => (
  <div className="app__container">
    {/* <ShoppingCart /> */}
    <FloatingWhatsApp
      phoneNumber="00201000155355"
      showPopuo
      popupMessage="Hello, I am a floating whatsapp"
      headerTiltle="Hello, I am a floating whatsapp"
      message="Hello, I am a floating whatsapp"
      position="right"
      accountName="Minou pastry shop"
      allowEsc
      allowClickAway
      notification
      notificationSound
    />

    {/* <MainDiscountBar /> */}
    {/* <Minouvideo /> */}
    {/* <BestSeller /> */}
    {/* <SessonSlides /> */}
    {/* <SpecialOrderCakes /> */}
    <Header />
    <MinouBox />

    <Slideshow />

    <BirthdayCakes />
    <WeddingCakes />
    <MiniCakes />
    <ProductsItems />
    <SpecialOccasionCakes />
  </div>
);

export default Shop;
