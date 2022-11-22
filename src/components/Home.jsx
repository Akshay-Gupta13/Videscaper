import React, { Component } from "react";
import homeimg from "../images/home-logo.png";
const Home = () => {
  return (
    <>
      <div className="home-main">
        <div className="text">
          <h1 className="hero-text">Vidscaper</h1>
          <p className="content">
                 <h2 className="">Making your best videos
                  with today's best online
                  video editing service</h2> 

          </p>
          <button className="btn black-btn">Get Started</button>
          
        </div>
        <div className="image">
          <figure>
            <img src={homeimg} className="home-image" alt="home logo" />
          </figure>
        </div>
      </div>
      
    </>
  );
};

export default Home;
