import React from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = ({ googleToken, setGoogleToken }) => {
  return (
    <div>
      <Navbar googleToken={googleToken}></Navbar>
      <div className="login-container">
        <div className="login-form">
          <h1>Login</h1>
          <p className="welcome-text">Welcome back</p>
          <GoogleLogin
            className="social-button google"
            onSuccess={(credentialResponse) => {
              // console.log(credentialResponse);
              setGoogleToken(jwtDecode(credentialResponse.credential));
              console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
