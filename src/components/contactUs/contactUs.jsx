import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactUs.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vngwsne",
        "template_vwgvl7c",
        form.current,
        "LTN3V3nqsHLrDm3qn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="ContactUs">
      <h2>Send Us A message</h2>
      <input type="text" name="user_name" placeholder="Name:" />
      <input type="email" name="user_email" placeholder="Email:" />
      <textarea
        name="message"
        style={{
          minWidth: "200px",
          maxHeight: "200px",
          minHeight: "100px",
          maxWidth: "200px",
        }}
        placeholder="Message:"
      />
      <button type="submit">Send</button>
    </form>
  );
};
