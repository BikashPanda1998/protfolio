import React from "react";
import amazon from "../../image/amazon.png"
import fiver from "../../image/fiverr.png"
import upwork from "../../image/Upwork.png"
import shopify from "../../image/Shopify.png"
import facebook from "../../image/Facebook.png"
import "./Work.css";
import { useContext } from "react";
import { theme } from "../../Context";
import { motion } from "framer-motion";
const Work = () => {
  const themecontext=useContext(theme);
  const darkMode = themecontext.state.darkMode;
  return (
    <div className="work">
      <div className="awesome">
        <span style={{color: darkMode?'white':''}}> Work for All these </span>
        <span>Brand and Client</span>
        <span>
          Lorem ipsum dolor sit amet consectetur,
          <br />
          adipisicing elit. Quisquam consectetur
          <br />
          distinctio cum voluptatum placeat
          <br />
          fugit id vero dolor sit, soluta ut quia, in quaerat
           <br />
          consequuntur nobis. Minus perspiciatis illo maiores!
        </span>
        
          <button className="button d-button">Hire Me</button>
        
        <div className="blur s-blur1" style={{ background: "#abf1ff94" }}></div>
      </div>
      <div className="w-right"> 
        <motion.div
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duration:3.5, type:'spring'}}
        className="maincircle">
            <div className="subcircle">
                <img src={upwork} alt=""/>
            </div>
            <div className="subcircle">
                <img src={fiver} alt=""/>
            </div>
            <div className="subcircle">
                <img src={amazon} alt=""/>
            </div>
            <div className="subcircle">
                <img src={facebook} alt=""/>
            </div>
            <div className="subcircle">
                <img src={shopify} alt=""/>
            </div>
        </motion.div>
        <div className="bcircle bluecircle"></div>
        <div className="bcircle yellowcircle"></div>
      </div>
    </div>
  );
};
export default Work;
