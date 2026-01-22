import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Footer  from "./Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
