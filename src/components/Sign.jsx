import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import loginimg from "../images/login-img.png";
const Sign = () => {
  return (
    <>
      <div className="sign-main">
        <div className="sign-text">
          <h1 className="hero-text">
            <div>Hello!</div>
            <div>Welcome  here</div>
            </h1>
            <h2>Login to your account</h2>
          <form className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="text" id="username" autoComplete="off" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="MailId">MailId</label>
              <input type="MailId" name="MailId" id="MailId" autoComplete="off" />
            </div>
          </form>
          <a href="#" className="forgot-pass-link">Forgot password?</a>
          <button className="btn login-btn">Login</button>
          <NavLink to="/login" className="create-acc-link">
            Thanks for creating account
          </NavLink>
        </div>
        <div className="image ">
          <figure className="login-image">
            <img src={loginimg} className="login-img" alt="home logo" />
          </figure>
          
        </div>
      </div>
    </>
  );
};

export default Sign;
