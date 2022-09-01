import React, { useContext } from "react";
import { theme } from "../../Context";
import "./Contact.css"

const Contact =()=>{
    const themecontext=useContext(theme);
    const darkMode = themecontext.state.darkMode;
    return(
        <div className="contact" id="Contact">
            <div className="c-left">
                <div className="awesome">
                <span style={{color: darkMode?'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur c-blur1" style={{"background":"#abf1ff94"}}></div>
                </div>
            </div>
            <div className="c-right">
                <form>
                    <input type="text" name="username" className="user" placeholder="Name"/>
                    <input type="email" name="useremail" className="user" placeholder="Email"/>
                    <textarea name="message" className="user" placeholder="Message"/>
                    <input type='submit' value='send' className="button" />
                    <div className="blur c-blur2" style={{"background":"rgb(229, 170, 248)"}}></div>
                    {/*for sending the contact report after submitting use email.js and implement it */}
                </form>
            </div>
        </div>
    )
}
export default Contact