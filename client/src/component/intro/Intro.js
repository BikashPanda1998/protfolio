import React from "react";
import "./Intro.css";
import github from "../../image/github.png";
import instagrm from "../../image/instagram.png";
import linkedin from "../../image/linkedin.png";
import vector1 from "../../image/Vector1.png";
import vector2 from "../../image/Vector2.png";
import boy from "../../image/boy.png";
import crown from "../../image/crown.png";
import thumbup from "../../image/thumbup.png";
import glassimoji from "../../image/glassesimoji.png";
import Floating from "../floating/Floating";
import { theme } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion"


const Intro = () => {
  const transition ={duration:2, type:"spring"}

  const themecontext=useContext(theme);
  const darkMode = themecontext.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode?'white':''}}>Hy! I Am </span>
          <span> Andrew Thomson</span>
          <span>
            Frontend Developer with high level of creativity in web designing
            and devlopement, produtive Quality
          </span>
        </div>
        <button className="button i-button"> Hire me</button>
        <div className="i-icons">
          <a href="#">
            <img src={github} alt="not found the path" />
          </a>
          <a href="#">
            <img src={instagrm} alt="not found" />
          </a>
          <a href="#">
            <img src={linkedin} alt="not found"></img>
          </a>
        </div>
      </div>
      <div className="i-right">
            <img src={vector1} alt=""></img>
            <img src={vector2} alt=""></img>
            <img src={boy} alt=""></img>
            <motion.img 
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassimoji} alt=" "/>
            <motion.div 
            initial={{top:"-4%", left:"74%"}} 
            whileInView={{left:'68%'}}
            transition={transition}
            style={{"top":"-4%", "left":"68%"}}>
                <Floating image={crown} text1='Web' text2='Devloper'/>
            </motion.div>
            <motion.div
            initial={{top:"18rem", left:"0rem"}} 
            whileInView={{top:'18rem',left:'-1rem'}}
            transition={transition}
            style={{"top":"18rem","left":"-1rem"}}>
            <Floating image={thumbup} text1='Best Design' text2='Award'/>
            </motion.div>
            <motion.div 
            
            className="blur" style={{"background":"rgb(238 210 255)"}}></motion.div>
            <div className="blur" style={{"background":"#c1f5ff","top":"17rem","width":"25rem","height":"15rem","left":"-8rem"}}></div>
        </div>
    </div>
  );
};

export default Intro;
