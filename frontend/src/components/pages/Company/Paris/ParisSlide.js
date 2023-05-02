import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import 'photoswipe/dist/photoswipe.css'
import "swiper/css";

import './paris.css'

import { Autoplay } from "swiper";
import {Item} from "react-photoswipe-gallery";

import parisImg from '../../../images/company-t.jpeg'
import teamC from "../../../images/team-c.jpeg";


const SliderBgr = () => {
    return (
        <>
            <Swiper modules={[Autoplay]}  autoplay={{delay: 5000, disableOnInteraction: false,}} speed={5000}  slidesPerView={1} spaceBetween={20}  className="mySwiper">
                <SwiperSlide>
                    <Item
                        original={parisImg}
                        thumbnail={parisImg}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="paris__img" ref={ref} onClick={open} src={parisImg} alt="parisImg"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={teamC}
                        thumbnail={teamC}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="paris__img" ref={ref} onClick={open} src={teamC} alt="teamC"/>
                        )}
                    </Item>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderBgr;