import React from 'react';
import { Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";

import album1 from "../../../../images/album1.png";
import album2 from "../../../../images/album2.png";
import album3 from "../../../../images/album3.png";
import album4 from "../../../../images/album4.png";
import card1 from "../../../../images/card1.jpeg";
import card2 from "../../../../images/card2.jpeg";
import card3 from "../../../../images/card3.jpeg";
import card18 from "../../../../images/card18.jpeg";
import card5 from "../../../../images/card5.JPG";
import card6 from "../../../../images/card6.jpeg";
import card7 from "../../../../images/card7.jpeg";
import card8 from "../../../../images/card8.jpeg";
import card9 from "../../../../images/card9.jpeg";
import card10 from "../../../../images/card10.jpeg";
import card11 from "../../../../images/card11.jpeg";
import card12 from "../../../../images/card12.jpeg";
import card13 from "../../../../images/card13.jpeg";
import card14 from "../../../../images/card14.jpeg";
import card15 from "../../../../images/card15.jpeg";
import card16 from "../../../../images/card16.jpeg";
import card17 from "../../../../images/card17.jpeg";
import card19 from "../../../../images/card19.jpeg";
import card20 from "../../../../images/card20.jpeg";


const SliderCourse = () => {

    return (
        <>
            <Swiper
                autoplay={{delay: 3000, disableOnInteraction: false,}}
                speed={3000}
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Item
                        original={album1}
                        thumbnail={album1}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={album1} alt="album"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={album2}
                        thumbnail={album2}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={album2} alt="album"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={album3}
                        thumbnail={album3}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={album3} alt="album"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={album4}
                        thumbnail={album4}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={album4} alt="album"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card1}
                        thumbnail={card1}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card1} alt="card1"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card2}
                        thumbnail={card2}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card2} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card3}
                        thumbnail={card3}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card3} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card5}
                        thumbnail={card5}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card5} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card6}
                        thumbnail={card6}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card6} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card7}
                        thumbnail={card7}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card7} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card8}
                        thumbnail={card8}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card8} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card9}
                        thumbnail={card9}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card9} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card10}
                        thumbnail={card10}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card10} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card11}
                        thumbnail={card11}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card11} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card12}
                        thumbnail={card12}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card12} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card13}
                        thumbnail={card13}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card13} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card18}
                        thumbnail={card18}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card18} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card14}
                        thumbnail={card14}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card14} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card15}
                        thumbnail={card15}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card15} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card16}
                        thumbnail={card16}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card16} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card17}
                        thumbnail={card17}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card17} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card19}
                        thumbnail={card19}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card19} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
                <SwiperSlide>
                    <Item
                        original={card20}
                        thumbnail={card20}
                        width="700"
                        height="1024"
                    >
                        {({ ref, open }) => (
                            <img className="album__img" ref={ref} onClick={open} src={card20} alt="card"/>
                        )}
                    </Item>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SliderCourse;