import React from "react";
import "./join.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hcqyua4",
        "template_mv5g2w9",
        form.current,
        "gpCmod-ssYUCsjWyK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="joinus">
      <div className="left-join">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-join">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="enter your email addres to join"
          />
          <button className="btn btn-j">JOIN NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
