import React from "react";
import "./toggle.css";
import UilSun from "@iconscout/react-unicons/icons/uil-sun";
import UilMoon from "@iconscout/react-unicons/icons/uil-moon";
import { theme } from "../../Context";
import { useContext } from "react";

const Toggle=()=>{
    const themecontext = useContext(theme);
    const darkMode=themecontext.state.darkMode;
    const handelClick=()=>{
        themecontext.dispatch({
            type:'toggle'
        })

    }

    return(
        <div className="toggle" onClick={handelClick}>
        <UilSun/>
        <UilMoon/>
        <div className="t-button"  style={
            darkMode?{left:'2px'}:{right:'2px'}
        }></div>
        </div>
    )
}
export default Toggle;