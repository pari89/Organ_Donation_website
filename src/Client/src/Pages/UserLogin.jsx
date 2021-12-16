import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./AuthCSS.css";
import axios from "axios";
import { Route } from "react-router";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FormControlUnstyledContext } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// INclude /:UserName in path of every Route that needs authentication
// and redirect to pages by appending UserName in URL (URL= `/PageName/${UserName}`)

const UserLogin = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [SecretKey, setSecretKey] = useState("");
  const [AuthStatus, setAuthStatus] = useState("NotValid");
  const [Message, SetMessage] = useState("");
  const [AccessToken, setAccessToken] = useState("");
  const CheckUserName = (e) => {
    setUserName(e.target.value);
    console.log(UserName);
  };
  const CheckPassword = (e) => {
    setPassword(e.target.value);
    console.log(UserName);
  };
  const CheckSecretKey = (e) => {
    setSecretKey(e.target.value);
    console.log(SecretKey);
  };

  const [UserType, setUserType] = useState("");
  async function submitLogin(e) {
    var CheckMessage = "";
    await axios
      .post(
        `http://localhost:5000/auth/${UserType}/Login`,
        UserType === "Admin"
          ? { UserName: UserName, Password: Password, SecretKey: SecretKey }
          : {
              UserName: UserName,
              Password: Password,
            }
      )
      .then((Response) => {
        console.log(Response.data);
        if (
          typeof Response.data.resval === "string" ||
          Response.data.resval instanceof String
        )
          SetMessage(Response.data.resval);
        const accessToken = Response.data.token;
        if (accessToken) {
          console.log("token from login->");
          console.log(Response.data.token);
          try {
            console.log(UserName);
            localStorage.setItem(`User ${UserName}`, accessToken);
          } catch (error) {
            console.log("error->");
            console.log(error);
          }
          setAccessToken(localStorage.getItem(`User ${UserName}`));
        }
        if (Response.data.resval) SetMessage(Response.data.resval);
        CheckMessage = Response.data.resval;

        console.log(AccessToken);
      })

      .catch((error) => {
        console.log("error while Logging in");
        console.log(error);
      });

    const token = localStorage.getItem(`User ${UserName}`);
    console.log("fetched from local->");
    console.log(token);
    if (token && CheckMessage === "Matched")
      await axios
        .get("http://localhost:5000/auth/TokenValidate", {
          headers: { authorization: `Bearer ${token}` },
        })
        .then((Response) => {
          if (Response.data.resval === "TokenVerified") {
            window.location.replace(`/dashboard/${UserName}`);
          }
          console.log(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  console.log("state after token validation ");
  console.log(AccessToken);

  return (
    <div className="SignUp-Wrapper">
         <span className="On-Box-Text">Login</span>
      <Box
        autoComplete="off"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          position: "relative",
          padding: "30px 30px",
          maxWidth: "360px",
          boxShadow: 4,
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      >
       
        <TextField
          name="password"
          autoComplete="off"
          id="standard-basic"
          label="UserName"
          variant="outlined"
          onChange={(e) => {
            CheckUserName(e);
          }}
          inputProps={{
            style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
          }}
          InputLabelProps={{
            style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
          }}
          sx={{ width: "100%", margin: "30px", boxShadow: 4 }}
        />

        <FormControl>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              width: "600px",
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            UserType
          </InputLabel>
          <Select
            sx={{ width: "150px", marginBottom: "3vh" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={UserType}
            label="User Type"
            inputProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            InputLabelProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            onChange={(e) => {
              setUserType(e.target.value); const UserTypeX=e.target.value; console.log(UserType); console.log(UserTypeX);
              if (UserTypeX === "Admin") {
                const AdminSecretKey = document.getElementById("CheckAdmin");
                AdminSecretKey.style.display = "flex";
              } else {
                const AdminSecretKey = document.getElementById("CheckAdmin");
                AdminSecretKey.style.display = "none";
              }
            }}
          >
            <MenuItem value={"User"}>User</MenuItem>
            <MenuItem value={"Admin"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <div
          id="CheckAdmin"
          className={
            "Check-Admin" + (UserType === "Admin" ? " Visiblex" : " Hiddenx")
          }
        >
          <TextField
            name="password"
            autoComplete="off"
            id="standard-basic"
            label="Admin Secret Key"
            variant="outlined"
            inputProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            InputLabelProps={{
              style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
            }}
            onChange={(e) => {
              CheckSecretKey(e);
            }}
            sx={{ width: "100%", boxShadow: 4, marginBottom: "3vh" }}
          />
        </div>
        <TextField
          name="password"
          autoComplete="off"
          id="standard-basic"
          label="Password"
          variant="outlined"
          inputProps={{
            style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
          }}
          InputLabelProps={{
            style: { fontSize: 18, wordSpacing: 17, lineHeight: 1.5 },
          }}
          onChange={(e) => {
            CheckPassword(e);
          }}
          sx={{ width: "100%", boxShadow: 4 }}
        />
        <div className="Button-Holder-Log">
          <div
            className="SignUp-Button"
            onClick={(e) => {
              submitLogin(e);
            }}
          >
            Login
          </div>
          <NavLink exact to="/auth/SignUp" className="SignUp-Button">
            Sign Up
          </NavLink>
        </div>
        <span className="SignUp-Message">{Message}</span>
      </Box>
    </div>
  );
};

export default UserLogin;
