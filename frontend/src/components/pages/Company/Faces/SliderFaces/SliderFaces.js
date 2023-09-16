import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./sliderFaces.css";

import { Autoplay } from "swiper";
import img from "../../../../images/tattygul.png";
import img1 from "../../../../images/eliza.png";
import img2 from "../../../../images/barsbek.png";
import img3 from "../../../../images/ainazik1.png";
import img4 from "../../../../images/maksat.png";
import img5 from "../../../../images/alina.png";
import img6 from "../../../../images/elnura.png";




const SliderCourse = () => {
    return (
        <>
            <Swiper
                autoplay={{delay: 4000, disableOnInteraction: false,}}
                speed={2000}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img6} alt="elnura"/>
                        <h2 className="faces__h2">Чоткараева Эльнура</h2>
                        <p className="faces__text">(старший менеджер)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img1} alt="elnura"/>
                        <h2 className="faces__h2">Ашимбекова Элиза </h2>
                        <p className="faces__text">(PR manager)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img} alt="elnura"/>
                        <h2 className="faces__h2">Кубатова Татыгуль</h2>
                        <p className="faces__text">(менеджер по курсам)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img2} alt="elnura"/>
                        <h2 className="faces__h2">Кыялбеков Барсбек </h2>
                        <p className="faces__text">(менеджер летней работы)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img3} alt="elnura"/>
                        <h2 className="faces__h2">Султаналиева Айназик </h2>
                        <p className="faces__text">(менеджер годовой работы и Ausbildung)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img4} alt="elnura"/>
                        <h2 className="faces__h2">Маликасан уулу Максат </h2>
                        <p className="faces__text">(менеджер летней работы)</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="faces__card">
                        <img className="faces__img" src={img5} alt="elnura"/>
                        <h2 className="faces__h2">Азатова Алина</h2>
                        <p className="faces__text">(менеджер летней работы)</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;
