import React from "react";
import "./reasons.css";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";
const Reasons = () => {
  return (
    <div className="reasons" id="reason">
      <div className="left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right">
        <span>some reason</span>
        <div>
          <span className="stroke-text">why</span>
          <span> Chosose us</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW NEMBER </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNER</span>
          </div>
        </div>

        <span
          style={{
            color: "gray",
            fontWeight: "norman",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
