import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../../assets/images/logo.png";
import "./../global/style.css";
import { grey } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { setLogout } from "../../redux/login/LoginAction";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () => {
    let path = `/login`;
    history.push(path);
  };

  const handleLogout = () => {
    dispatch(setLogout());
    alert("Anda Telah Logout");
  };

  const color = grey[900];
  const isLogin = useSelector((state) => state.LoginReducer.isLogged);
  const user = useSelector((state) => state.LoginReducer.email);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#151515" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src={logo} className="logoHeader" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Newspapper
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user}
          </Typography>
          {isLogin ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={routeChange}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
