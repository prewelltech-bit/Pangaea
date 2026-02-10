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
import AustraliaBlog from "./component/Blogs/AustraliaBlog";
import Au from "./component/StudyAbroad/Australia/Au";
import CanadaCountry from "./component/StudyAbroad/canada/CanadaCountry";
import NewZealand from "./component/StudyAbroad/NewZealand/NewZealand";

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
        <Route path="/study/australia" element={<Au />} />
        <Route path="/study/uk" element={<Uk />} />
        <Route path="/study/canada" element={<CanadaCountry />} />
        <Route path="/study/new-zealand" element={<NewZealand />} />

        <Route path="/pte" element={<PTE />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/australia-blog" element={<AustraliaBlog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;