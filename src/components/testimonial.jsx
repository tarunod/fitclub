import React from "react";
import "./testimonial.css";
import { testimonialsData } from "../data/testimonialsData";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import { useState } from "react";
function Testimonial() {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className="tesimonial">
      <div className="left-t">
        <span>Testimonial</span>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          -{testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div className="border"></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() =>
              selected === 0
                ? setSelected(tLenght - 1)
                : setSelected(selected - 1)
            }
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() =>
              selected === tLenght - 1
                ? setSelected(0)
                : setSelected(selected + 1)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
