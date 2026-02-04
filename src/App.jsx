import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import Body from "./component/home/Body";
import PartneredUniversities from "./component/partnered-universities/PartneredUniversities";
import Uk from "./component/StudyAbroad/UK/Uk";

import "./index.css";
import PTE from "./component/pte/PTE";
import Contact from "./component/ContactUs/Contact";
import Blogs from "./component/Blogs/Blogs";


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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
