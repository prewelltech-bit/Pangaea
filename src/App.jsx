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
import Europe from "./component/StudyAbroad/europe/europe";
import Us from "./component/StudyAbroad/US/Us";
import CanadaBlogs from "./component/Blogs/CanadaBlogs";
import UKBlogs from "./component/Blogs/UKBlogs";
import TermsAndCondition from "./component/Terms&Condition/TermsAndCondition";
import PrivacyPolice from "./component/PrivacyPolice/PrivacyPolice";

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
        <Route path="/study/europe" element={<Europe />} />
        <Route path="/study/united-states" element={<Us />} />

        <Route path="/pte" element={<PTE />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/australia-blog" element={<AustraliaBlog />} />
        <Route path="/canada-blog" element={<CanadaBlogs />} />
        <Route path="/uk-blog" element={<UKBlogs />} />

        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolice />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;