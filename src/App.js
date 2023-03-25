import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";

import MainPage from "./pages/MainPage/MainPage";
import { CartContainer } from "./pages/Cart/CartContainer";
import { ShopContextProvider } from "./container/context/shop-context";
import { CheckOutByEmail } from "./pages/CheckOutByEmail/CheckOutByEmail";

import OrderNow from "./pages/OrderNow/OrderNow";

import MinouBox from "./pages/MinouBox/MinouBox";

import "./App.css";

const App = () => (
  <div className="app">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/minoupastryshop" element={<MainPage />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="/CheckOutByEmail" element={<CheckOutByEmail />} />
          <Route path="/OrderNow" element={<OrderNow />} />
          <Route path="/MinouBox" element={<MinouBox />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  </div>
);

export default App;
