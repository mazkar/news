import React from "react";
import Footer from "../global/Footer";
import CardLogin from "./cardLogin/cardLogin";

const LoginComp = (props) => {
  return (
    <div className="globalContainer">
      <CardLogin />
      <Footer />
    </div>
  );
};

export default LoginComp;
