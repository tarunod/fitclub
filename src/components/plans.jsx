import React from "react";
import "./plans.css";
import tick from "../assets/whiteTick.png";
import { plansData } from "../data/plansData";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-b-1"></div>
      <div className="blur plans-b-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START </span>
        <span>YOUR JOURNEY </span>
        <span className="stroke-text">NOW WITH US</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span> $ {plan.price}</span>

              <div className="features">
                {plan.features.map((feature, i) => (
                  <div className="feature">
                    <img src={tick} alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <div>
                  <span>See more benifits</span>
                </div>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
