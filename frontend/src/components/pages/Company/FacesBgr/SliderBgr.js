import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import "swiper/css";

import "./bgr.css";

import { Autoplay } from "swiper";
import facesBgr from "../../../images/team.jpg";
import team from "../../../images/team-a.jpg";
import team1 from "../../../images/team-d.jpg";
import team2 from "../../../images/team-s.jpg";
import team3 from "../../../images/team-g.jpg";

const SliderBgr = () => {
    return (
        <>
            <Swiper modules={[Autoplay]}  autoplay={{delay: 5000, disableOnInteraction: false,}} speed={2000}  slidesPerView={1} spaceBetween={20}  className="mySwiper">
                <SwiperSlide>
                    <Item
                        original={facesBgr}
                        thumbnail={facesBgr}
                        width="1700"
                        height="1124"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={facesBgr} alt="facesBgr"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={team}
                        thumbnail={team}
                        width="1700"
                        height="1124"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={team} alt="team"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={team2}
                        thumbnail={team2}
                        width="1700"
                        height="1124"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={team2} alt="facesBgr"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={team1}
                        thumbnail={team1}
                        width="1700"
                        height="1124"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={team1} alt="facesBgr"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={team3}
                        thumbnail={team3}
                        width="1700"
                        height="1124"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={team3} alt="facesBgr"/>
                        )}
                    </Item>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderBgr;
