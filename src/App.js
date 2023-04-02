import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, BackGroundAnimations } from "./components";

import MainPage from "./pages/MainPage/MainPage";
import { CartContainer } from "./pages/Cart/CartContainer";
import { ShopContextProvider } from "./container/context/shop-context";
import { CheckOutByEmail } from "./pages/CheckOutByEmail/CheckOutByEmail";
import GiftBoxAnimation from "./pages/GiftBoxAnimation/GiftBoxAnimation";

import OrderNow from "./pages/OrderNow/OrderNow";

import MinouBox from "./pages/MinouBox/MinouBox";
import Cookies from "./pages/Cookies/Cookies";
import Brownies from "./pages/Brownies/Brownies";
import Cupcakes from "./pages/Cupcakes/Cupcakes";
import Eclairs from "./pages/Eclairs/Eclairs";
import "./App.css";

const App = () => (
  <div className="app">
    <ShopContextProvider>
      <Router>
        <GiftBoxAnimation />

        <Navbar />
        <BackGroundAnimations />
        <Routes>
          <Route path="/minoupastryshop" element={<MainPage />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="/CheckOutByEmail" element={<CheckOutByEmail />} />
          <Route path="/OrderNow" element={<OrderNow />} />
          <Route path="/MinouBox" element={<MinouBox />} />
          <Route path="/Cookies" element={<Cookies />} />
          <Route path="/Brownies" element={<Brownies />} />
          <Route path="/Cupcakes" element={<Cupcakes />} />
          <Route path="/Eclairs" element={<Eclairs />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  </div>
);

export default App;
