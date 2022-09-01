import React from 'react';
import Toggle from '../toggle/Toggle';
import "./Navbar.css";
import {Link} from "react-scroll";
const Navbar=()=>{
    return(
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>Andrew</div>
                <Toggle/>
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul>
                        <Link spy={true} to='Navbar' smooth={true} ><li>Home</li></Link>
                        <Link spy={true} to='Services' smooth={true}><li>Services</li></Link>
                        <Link spy={true} to='Experience' smooth={true}><li>Experience</li></Link>
                        <Link spy={true} to='Portfolio' smooth={true}><li>Portfolio</li></Link>
                        <Link spy={true} to='Testimonial' smooth={true}><li>Testimonials</li></Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact'><button className='button n-button' style={{"lineHeight":"10px"}}>contact us</button></Link>
            </div>
        </div>
    )
}

export default Navbar;