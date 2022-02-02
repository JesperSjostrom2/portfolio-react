import React from 'react';
import "./intro.css";
import selfie from "../../img/transparent.png"

const Intro = () => {
  return <div className='i' id="Home">
    <div className="i-left">
    <div className="i-left-wrapper">
      <h2 className="i-intro">Hello, My name is </h2>
      <h1 className="i-name">Jesper Sjöström</h1>
      <div className="i-title">
       <div className="i-title-wrapper">
         <div className="i-title-item">Web Developer</div>
         <div className="i-title-item">UI/UX Designer</div>
         <div className="i-title-item">Front-End Developer</div>
         <div className="i-title-item">Web Designer</div>
         <div className="i-title-item">Made in React</div>
       </div>
      </div>
      <div className="i-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod odit qui quasi deleniti tempore, rem hic temporibus aspernatur reiciendis beatae molestiae, quidem repellendus iusto quam. Delectus sed odio a ullam?
      </div>
      </div>
    </div>
    <div className="i-right">
      <div className="i-bg"></div>
      <img src={selfie} alt="" className="i-img" />
    </div>
  </div>;
};

export default Intro;
