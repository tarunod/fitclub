import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import calories from "../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header></Header>
        <div className="thebest">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">shap </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programm</span>
          </div>
        </div>

        {/* hero buttuns */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div>
            <span>calorries burned</span>
            <span>220 cal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
