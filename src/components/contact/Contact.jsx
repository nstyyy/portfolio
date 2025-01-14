import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdPhone, MdLocationCity } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Entrez en contact avec moi</h5>
      <h5>
        Laissez moi un message et je serais ravis de vous répondre dès que possible !
      </h5>
      <h2>Me contacter</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdPhone className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>n.burgaud.pro@gmail.com</h5>
              <h5>07 60 20 74 17</h5>
              <h5>Toulouse, France</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
