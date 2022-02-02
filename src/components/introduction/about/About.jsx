import React from 'react';
import "./about.css";
import Hera from "../../../img/3.jpg"

const About = () => {
  return <div className="a" id="About">
      <div className="a-left"></div>
    <div className='a-card bg'>
    <div className='a-card'>
        <img src={Hera} alt="TEMPORARY" className="a-img" />
        </div>
        </div>
      <div className="a-right">
        <div className="a-wrapper">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab unde delectus, iusto voluptate eveniet, aliquid consequuntur quasi molestiae velit eum quidem rerum in accusantium facere laboriosam? Explicabo est quo soluta?
        </p>
        </div>
      </div>
  </div>;
};

export default About;
