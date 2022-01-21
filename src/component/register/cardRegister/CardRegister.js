import React, { useState } from "react";
import "./style.css";
import { Button, TextField, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/login/LoginAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Kota = [
  {
    label: "Jawa Barat",
    value: 1,
  },
  {
    label: "Jawa Tengah",
    value: 2,
  },
];

const Kota2 = [
  {
    label: "Jakarta",
    value: 1,
  },
  {
    label: "Semarang",
    value: 2,
  },
  {
    label: "Bandung",
    value: 2,
  },
  {
    label: "Cirebon",
    value: 2,
  },
  {
    label: "Garut",
    value: 2,
  },
];

const CardRegister = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () => {
    let path = `/login`;
    history.push(path);
  };

  const handleLogin = () => {
    dispatch(setLogin(email, password));
    routeChange();
    alert("Sign up sukses, silahkan Login");
  };
  return (
    <div className="mainContainer">
      <div className="divBox1">
        <div className="containerTextTitle">
          <h2 className="textWelcome">Sign Up To Join Newspapper</h2>
        </div>
        <div className="containerForm">
          <div>
            <TextField id="filled-basic" label="First Name" variant="standard" className="formEmail" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="containerPassword">
            <TextField id="filled-basic" label="Last Name" variant="standard" className="formPassword" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="containerPassword">
            <TextField id="filled-basic" label="Email" variant="standard" className="formPassword" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="containerPassword">
            <TextField id="filled-basic" label="Password" variant="standard" className="formPassword" onChange={(e) => setPassword(e.target.value)} type="password" />
          </div>
          <div className="containerPassword">
            <TextField select required="true" margin="normal" label="Pilih Provinsi" size="medium" className="formKota">
              {Kota.map((option) => (
                <MenuItem key={option.provinsi} value={option.provinsi}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="containerPassword">
            <TextField select required="true" margin="normal" label="Pilih Kota" size="medium" className="formKota">
              {Kota2.map((option) => (
                <MenuItem key={option.provinsi} value={option.provinsi}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="button">
            <Button variant="outlined" size="large" color="secondary" onClick={handleLogin}>
              Submit
            </Button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardRegister;
