import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header/Header";
import Footer  from "./Footer/Footer";
import Body from "./component/home/body";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
