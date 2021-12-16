import express from "express";
import mongoose from "mongoose";
import UserLoginData from "../Models/Users.js";
import { AdminLoginData } from "../Models/Users.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { maxHeaderSize } from "http";

const LoginRouter = express.Router();

// JWT token implementation without libraries ->
//https://www.telerik.com/blogs/json-web-token-jwt-implementation-using-nodejs

LoginRouter.post("/:UserType/SignUp", async (req, res) => {
  const UserType = req.params.UserType;
  console.log("req body is->");
  console.log(req.body);
  const UserName = req.body.UserName;
  const Password = req.body.Password;
  if (UserName.length < 5 || Password.length < 3) {
    const resval = "UserName or Password Not Entered";
    console.log("UserName or Password Not Entered");
    res.send(resval);
  } else {
    try {
      const UserName = req.body.UserName;
      const AccessToken = jwt.sign({ UserName }, process.env.AccessToken, {
        expiresIn: "6h"
      });

      console.log(AccessToken);

      if (UserType === "User") {
        let Existing = false,
          GenAccTok = false;
        const NewUserLoginData = new AdminLoginData({
          UserName: req.body.UserName,
          Password: req.body.Password
        });

        await NewUserLoginData.save()
          .then((res) => {
            console.log("USer saved");
          })
          .catch((err) => {
            if (err) {
              Existing = true;
              console.log(Existing);
            }
            const resval = "AccountExists";
            res.send(resval);
            console.log("error at User save");
            console.log(err);
          });
        console.log(Existing);
        if (Existing === false) {
          console.log("Not Existing so gen Tok");
          res.status(202).json({ AccessToken: AccessToken });
        }
      } else if (UserType === "Admin") {
        console.log("Entered Admin Sign Up");
        let Existing = false,
          GenAccTok = false;
        const NewAdminLoginData = new UserLoginData({
          UserName: req.body.UserName,
          Password: req.body.Password
        });
        await NewAdminLoginData.save()
          .then((res) => {
            console.log("New Admin Added");
            console.log(res);
          })
          .catch((err) => {
            if (err) {
              Existing = true;
              console.log(Existing);
            }
            const resval = "AccountExists";
            res.send(resval);
            console.log("error at User save");
            console.log(err);
          });

        if (Existing === false) {
          console.log(AccessToken);
          res.status(202).json({ AccessToken: AccessToken });
        }
      }
    } catch (error) {
      console.log(error);
      res.send(error);
      res.end();
    }
  }
});

function fetchToken(UserName) {
  return jwt.sign({ UserName }, process.env.RefreshToken, { expiresIn: "6h" });
}

LoginRouter.post("/:UserType/Login", async (req, result) => {
  console.log("req.Body->")
  console.log(req.body);
  var resval = "";
  var ressent = false;
  try {
    const UserType = req.params.UserType;
    const UserName = req.body.UserName;
    const password = req.body.Password;
    console.log("now at Login");
    if (UserType === "User") {
      await UserLoginData.findOne({ UserName }, (err, obj) => {
        try {
          const LoginCheck = obj;
          console.log(req.body);
          if (LoginCheck) {
            if (LoginCheck.Password && LoginCheck.Password === password) {
              console.log(LoginCheck);
              resval = "Matched";
              const token = fetchToken(UserName);
              result.send({
                resval: resval,
                token: token
              });
              ressent = true;
              console.log("Match");
            } else {
              resval = "Incorrect Password";
              console.log("Incorrect Password");
            }
          } else {
            resval = "Wrong UserName or Password";
            console.log("Wrong UserName or Password");
          }
        } catch (err) {
          resval = "Error Ocurred Try Again";
          console.log(err);
        }
        if (ressent === false) result.send({ resval: resval });
      });
    } else if (UserType === "Admin") { console.log(req.body);
      AdminLoginData.findOne({ UserName }, (err, obj) => {
        try {
          const LoginCheck = obj;
          if (LoginCheck) {console.log(process.env.SecretKey);
            if (LoginCheck.Password && LoginCheck.Password === password && req.body.SecretKey===process.env.SecretKey) {
              console.log(LoginCheck);
              resval = "Matched";
              const token = fetchToken(UserName);
              result.send({
                resval: resval,
                token: token
              });
              ressent = true;
              console.log("Match");
            } else {
              resval = "Incorrect Password";
              console.log("Incorrect Password");
            }
          } else {
            resval = "Wrong UserName or Password";
            console.log("Wrong UserName or Password");
          }
        } catch (err) {
          resval = "Error Ocurred Try Again";
          console.log(err);
        }
        if (ressent === false) result.send({ resval: resval });
      });
    }
  } catch (err) {
    resval = "Error Ocurred Try Again";
    console.log(err);
  }
});

LoginRouter.get("/:UserType/RefreshToken/:UserName", async (req, res) => {
  const UserType = req.params.UserType;
  const UserName = req.params.UserName;
  const AccessToken = fetchToken({ UserName });
  res.status(202).json({ AccessToken: AccessToken });
});

LoginRouter.get("/TokenValidate", async (req, res) => {
  console.log("TokenValidate Called->");

  const HeaderToken = req.headers["authorization"];
  const Token = HeaderToken && HeaderToken.split(" ")[1];
  console.log("This is Acquired Token->");
  console.log(Token);
  if (Token === null) {
    const resval = "NoTokenFound";
    res.send(resval);
    console.log("Invalid Req, Token Not found Checking Password");
  } else {
    var reftoken = false;

    jwt.verify(Token, process.env.RefreshToken, (err, UserName) => {
      if (err) {
        console.log(err);
        console.log(UserName);
        res.send("TokenExpired");
      } else {
        reftoken = true;
        console.log(UserName);

        console.log(Date.now());
        const resval = "TokenVerified";
        res.send({ resval });

        console.log("Token Verified");
      }
    });
    // if(reftoken===false){
    //   jwt.verify(Token, process.env.AccessToken, (err, UserName) => {
    //     if (err) {
    //         console.log(err);

    //       res.send("TokenExpired");
    //     } else {reftoken=true;
    //       console.log(UserName);
    //       console.log(Date.now());
    //       const resval="TokenVerified";
    //    res.send({resval});

    //       console.log("Token Verified");

    //     }
    //   });
    //   }
  }
});

export default LoginRouter;
