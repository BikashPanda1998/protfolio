import React from "react";
import "./testimonila.css"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import profile1 from "../../image/profile1.jpg"
import profile2 from "../../image/profile2.jpg"
import profile3 from "../../image/profile3.jpg"
import profile4 from "../../image/profile4.jpg"

const Testimonilal=()=>{
   const clients=[
    { 
    img: profile1 ,
     review:"The href attribute requires a valid value to be accessible. but still need the element to resemble a link, use a button and change it with appropriate styles"
    },
    {
        img: profile2,
        review:"The href attribute requires a valid value to be accessible. but still need the element to resemble a link, use a button and change it with appropriate styles"
    },
    {
        img: profile3,
     review:"The href attribute requires a valid value to be accessible.  but still need the element to resemble a link, use a button and change it with appropriate styles"
    },
    {
        img: profile4,
     review:"The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. but still need the element to resemble a link"
    }
   ]
    return(
        <div className="t-wrapper" id="Testimonial">
            <div className="t-heading">
                <span>Clients Always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{"background":"rgb(229, 170, 248)"}}></div>
                <div className="blur t-blur2" style={{"background":"skyblue"}}></div>
            </div>
            <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{clickable: true}}
            > 
              {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="profile picture"/>
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
                })}
            </Swiper>

        </div>
    );
}
export default Testimonilal;