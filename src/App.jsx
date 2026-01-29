import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PartneredUniversities from "./component/partnered-universities/PartneredUniversities";
import Body from "./component/home/Body";
import "./index.css"
import Uk from "./component/StudyAbroad/UK/Uk";

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
        <Route
          path="/study/uk"
          element={<Uk/>}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
