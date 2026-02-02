import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Body from "./component/home/Body";
import PartneredUniversities from "./component/partnered-universities/PartneredUniversities";
import Uk from "./component/StudyAbroad/UK/Uk";

import "./index.css";
import PTE from "./component/pte/PTE";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/partnered-universities"
          element={<PartneredUniversities />}
        />
        <Route path="/study/uk" element={<Uk />} />
        <Route path="/pte" element={<PTE />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
