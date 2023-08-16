import React from "react";
import "./programs.css";
import { programsData } from "../data/programsData";
import Rightarrow from "../assets/rightArrow.png";
const programs = () => {
  return (
    <div className="program" id="programm">
      <div className="programms_header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-catogory">
        {programsData.map((programm) => {
          return (
            <div className="catogory">
              {programm.image}
              <span>{programm.heading}</span>
              <span>{programm.details}</span>

              <div className="join-now">
                <span>join now</span>
                <img src={Rightarrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default programs;
