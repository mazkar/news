import React, { useEffect } from "react";
import "./style.css";
import Header from "../global/Header";
import CardDetail from "./cardDetail/CardDetail";

const DetailComponent = (props) => {
  return (
    <div className="globalContainer">
      <Header />
      <CardDetail />
    </div>
  );
};

export default DetailComponent;
