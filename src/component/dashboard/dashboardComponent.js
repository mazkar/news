import React from "react";

import Header from "../global/Header";
import Footer from "../global/Footer";
import Card from "./card/Card";
import "./style.css";
const DashboardComp = (props) => {
  return (
    <div className="globalContainer">
      <div>
        <Header />
      </div>
      <div>
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardComp;
