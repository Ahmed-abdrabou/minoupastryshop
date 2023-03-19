import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Shop from "./pages/Shop/Shop";
import { CartContainer } from "./pages/Cart/CartContainer";
import { ShopContextProvider } from "./container/context/shop-context";
import { CheckOutByEmail } from "./pages/CheckOutByEmail/CheckOutByEmail";

import "./App.css";

const App = () => (
  <div className="app">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Cart" element={<CartContainer />} />
          <Route path="/CheckOutByEmail" element={<CheckOutByEmail />} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  </div>
);

export default App;
