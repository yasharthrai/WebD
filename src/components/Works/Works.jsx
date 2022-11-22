import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div>
    <div className='awesome'>

         <span>Works for All these</span>
         <span>Brands & Clients</span>
         <spane>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem 
         <br />
         ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem i
         <br/>
         lorem ipsul lorem ipsum lorem ipsum ipsum lorem ipsum lorem i
         <br />
         ipsum lorem ipsum lorem iipsum lorem ipsum lorem ipsum lorem
         </spane>
        <button className='button s-button'>Hire Me</button>     
        <div className='blur s-blur' style={{background: "#abf1ff94"}}></div>
       </div>
 
        {  /* right side */ }
    <div className="w-right">
    <div className='w-mainCircle'>
       <div className='w-secCircle'>
          <img src={Upwork} alt="upwork" />
       </div>
       <div className='w-secCircle'>
          <img src={Fiverr} alt="fiverr" />
       </div>
       <div className='w-secCircle'>
          <img src={Amazon} alt="amazon" />
       </div>
       <div className='w-secCircle'>
          <img src={Shopify} alt="shopify" />
       </div>
       <div className='w-secCircle'>
          <img src={Facebook} alt="facebook" />
       </div>
          {/* Background  Circle*/}

       <div className='w-backCircle blueCircle'></div>
       <div className='w-backCircle yellowCircle'></div>' 


    </div>    
    </div>

    </div>
  )
}

export default Works