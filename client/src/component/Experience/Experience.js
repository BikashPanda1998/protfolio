import React, { useContext } from 'react';
import "./experience.css";

const Experience =()=>{
    
    return(
        <div className='experience' id='Experience'>
            <div className='achivement'>
                <div className='circle'>8+</div>
                <span> years</span>
                <span> Experience</span>
            </div>
            <div className='achivement'>
                <div className='circle'>20+</div>
                <span> completed</span>
                <span> Projected</span>
            </div>
            <div className='achivement'>
                <div className='circle'>5+</div>
                <span> Companies</span>
                <span>Work</span>
            </div>
        </div>
    );
}

export default Experience;