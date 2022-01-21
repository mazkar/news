import React, { useState } from "react";
import "./style.css";
import { Button, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/login/LoginAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CardLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };
  const routeChangeRegister = () => {
    let path = `/signup`;
    history.push(path);
  };

  const handleLogin = () => {
    dispatch(setLogin(email, password));
    routeChange();
    alert("Login Sukses");
  };
  return (
    <div className="mainContainer">
      <div className="divBox1">
        <div className="containerTextTitle">
          <h2 className="textWelcome">Login To Your Account</h2>
        </div>
        <div className="containerForm">
          <div>
            <h3>Email</h3>
            <TextField id="filled-basic" label="Username/Email" variant="standard" className="formEmail" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="containerPassword">
            <h3>Password</h3>
            <TextField id="filled-basic" label="Password" variant="standard" className="formPassword" onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>
          <div className="button">
            <Button variant="outlined" size="large" color="secondary" onClick={handleLogin}>
              Submit
            </Button>
          </div>
          <div className="button">
            <Button variant="outlined" size="large" color="success" onClick={routeChangeRegister}>
              Sign Up
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardLogin;
