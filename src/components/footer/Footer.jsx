import React from 'react';
import "./footer.css";
import Instagram from "../../img/instagram.png"
import LinkedIn from "../../img/linkedin.png"
import GitHub from "../../img/github.png"
import Twitter from "../../img/twitter.png"

const Footer = () => {
  return <div className="footer">
      <div className="socialMedia"> 
      <a href="https://instagram.com"><img src={Instagram} alt="Instagram" /></a>
      <a href="https://se.linkedin.com"><img src={LinkedIn} alt="LinkedIn" /></a>
      <a href="https://github.com/JesperSjostrom2"><img src={GitHub} alt="GitHub" /></a>
      <a href="https://twitter.com/"><img src={Twitter} alt="Twitter" /> </a>
      <hr />
      </div>
      <p>&copy; 2022 Portofolio.com</p>
  </div>;
};

export default Footer;
