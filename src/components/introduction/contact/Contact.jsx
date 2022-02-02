import React from 'react';
import "./contact.css";
import Phone from "../../../img/phone.png"
import Email from "../../../img/email.png"
import Address from "../../../img/address.png"
import CV from "../../../img/CV.png"
import Mail from "../../../img/mail.png"
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_nc33rye", "template_60ht0e1", formRef.current, "user_HmxPdShoAqs4kLIRbOTS3")
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });

    }

  return <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title" id="Contact">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="Phone" className="c-icon" />
                      +1 1234 556 75
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="Email" className="c-icon" />
                      contact@kyh.se
                  </div>
                  <div className="c-info-item">
                      <img src={Address} alt="Address" className="c-icon" />
                      123 Street, Nacka Stocholm 8520 Sweden
                  </div>
                  <h1 className="cv-title">CV</h1>
                  <div className="CV">
                  <img src={CV} alt="CV" />
                  </div>
                  <h1 className="cv-title"> Personal Letter</h1>
                  <div className="PersonalL">
                  <img src={Mail} alt="Personal letter" />
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                <b> What's your story?</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda tempore obcaecati aliquam beatae, enim corporis animi a nesciunt aspernatur, consequatur rerum recusandae quos officia suscipit quisquam aliquid nostrum magnam! Ab?
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" name="user_name" />
                  <input type="text" placeholder="Subject" name="user_subject" />
                  <input type="text" placeholder="Email" name="user_email" />
                  <textarea rows="5" placeholder="Message" name="message" />
                  <button>Submit</button>
                  
                  {done && "Thank You..."}
                  
              </form>
          </div>
      </div>
  </div>;
};

export default Contact;
