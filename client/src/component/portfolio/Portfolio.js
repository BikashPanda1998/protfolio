import React, { useContext } from "react";
import "./portfolio.css";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import sidebar from "../../image/sidebar.png"
import musicapp from "../../image/musicapp.png"
import HOC from "../../image/hoc.png"
import ecommerce from "../../image/ecommerce.png"
import { theme } from "../../Context";

const Portfolio =()=>{
    const themecontext=useContext(theme);
    const darkMode = themecontext.state.darkMode;
    return(
        <div className="portfolio" id="Portfolio">
            <span style={{color: darkMode?'white':''}}>Recent Project</span>
            <span>Portfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="portfolio-slider"
            > 
                <SwiperSlide>
                    <img src={sidebar} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio;