import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./component/home/body";
import PartneredUniversities from "./component/partnered-universities/PartneredUniversities";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/partnered-universities"
          element={<PartneredUniversities/>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
