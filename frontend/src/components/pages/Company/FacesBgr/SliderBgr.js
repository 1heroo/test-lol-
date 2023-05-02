import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import "swiper/css";

import "./bgr.css";

import { Autoplay } from "swiper";
import facesBgr from "../../../images/team-img.png";
import team from "../../../images/team.png";


const SliderBgr = () => {
    return (
        <>
            <Swiper modules={[Autoplay]}  autoplay={{delay: 5000, disableOnInteraction: false,}} speed={5000}  slidesPerView={1} spaceBetween={20}  className="mySwiper">
                <SwiperSlide>
                    <Item
                        original={team}
                        thumbnail={team}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={team} alt="team"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={facesBgr}
                        thumbnail={facesBgr}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={facesBgr} alt="facesBgr"/>
                        )}
                    </Item>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderBgr;