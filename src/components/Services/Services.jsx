import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from '../Resume.pdf';

const Services = () => {
  return (
    <div className='services'>
        
         {/* left side */}
        <div className='awesome'>

         <span>My Awesome</span>
         <span>Services</span>
         <spane>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsu<br/>lorem ipsul lorem ipsum lorem ipsum</spane>
        <a href={Resume} download>
        
        <button className='button s-button'>Download CV</button>
        </a>

        <div className='blur s-blur' style={{background: "#abf1ff94"}}></div>

        </div>

         {/* right side */}
        <div className='cards'>
           
            <div style={{left: '14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {"Design"}
            detail = {"Figma, Sketch, AdobeXd, WireFrames"}
            />
        </div>
                {/* second card */}

        <div style={{top: '12rem', left: '-4rem'}}>
           <Card
            emoji = {Glasses}
            heading = {"Developer"}
            detail = {"HTML, CSS, JavaScript, ReactJs, NodeJs"}
            />       
        </div>
                {/* third card */}

        <div style={{top: '19rem', left: '12rem'}}>
        <Card
            emoji = {Humble}
            heading = {"UI/UX"}
            detail = {"Lorem, Ipsum, Dolor, Sit, Amet"}
        />
        </div>
        <div className='"blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>

    </div>
  )
}

export default Services