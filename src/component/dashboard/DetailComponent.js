import React, { useEffect } from "react";
import "./style.css";
import Header from "../global/Header";
import CardDetail from "./cardDetail/CardDetail";
import Footer from "../global/Footer";
const DetailComponent = (props) => {
  return (
    <div className="globalContainer">
      <Header />
      <CardDetail />
      <Footer />
    </div>
  );
};

export default DetailComponent;
