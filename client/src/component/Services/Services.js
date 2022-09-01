import React from "react";
import "./services.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { theme } from "../../Context";
import heartimoji from "../../image/heartemoji.png";
import glasses from "../../image/glasses.png";
import humble from "../../image/humble.png";
import Card from "../Card/Card";
import resume from "./bikash kumar panda PHP.pdf";
const Services = () => {
  const themecontext=useContext(theme);
  const darkMode = themecontext.state.darkMode;
  const transition ={duration:2, type:"spring"}
  return (
    <div className="service" id="Services">
      <div className="awesome">
        <span style={{color: darkMode?'white':''}}> My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          consectetur <br />
          distinctio cum voluptatum placeat fugit id vero dolor sit, soluta ut
          quia, in quaerat <br />
          consequuntur nobis. Minus perspiciatis illo maiores!
        </span>
        <a href={resume} download>

        <button className="button d-button">Download cv</button>
        </a>
        <div className="blur s-blur1" style={{ "background": "#abf1ff94" }}></div>
      </div>
      <div className="cards">
        <motion.div 
            initial={{left:"19rem"}} 
            whileInView={{left:'22rem'}}
            transition={transition} style={{"left":"22rem"}}>
          <Card 
          emoji={heartimoji}
          heading={"Design"}
          details={"figma, Sketch, Photoshop, Adobe, Adobe Xd"}
          />
        </motion.div>
        <motion.div 
        initial={{top:"12rem", left:"-2rem"}} 
        whileInView={{left:'-4rem'}}
        transition={transition}
        style={{"top":"12rem","left":"-4rem"}}>
          <Card 
          emoji={glasses}
          heading={"Devloper"}
          details={"HTML, CSS, JAVASCRIPT, REACT"}
          />
        </motion.div>
        <div style={{"top":"20rem","left":"14rem"}}>
          <Card 
          emoji={humble}
          heading={"UI/UX"}
          details={"UI full stack devloper"}
          />
        </div>
        <div className="blur s-blur2" style={{ "background": "rgb(238, 210, 255)" }}></div>
      </div>
    </div>
  );
};
export default Services;
