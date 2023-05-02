import React from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import {FaInstagram, FaFacebook} from "react-icons/fa";
import europa from './europa.jpg'
import europaP from './europaP.jpg'
import euro from './Euro.jpg'
import euroPark from './europark.jpg'
import park from './parkeuro.jpg'
import './reviews.css'

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <Gallery>
                    <Item
                        original={europa}
                        thumbnail={europa}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="reviews__images " ref={ref} onClick={open} src={europa} alt="europa"/>
                        )}
                    </Item>
                    <Item
                        original={europaP}
                        thumbnail={europaP}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="reviews__images reviews__i" ref={ref} onClick={open} src={europaP} alt="europaP"/>
                        )}
                    </Item>
                    <Item
                        original={euro}
                        thumbnail={euro}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="reviews__images reviews__i" ref={ref} onClick={open} src={euro} alt="europaP"/>
                        )}
                    </Item>
                    <Item
                        original={euroPark}
                        thumbnail={euroPark}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="reviews__images reviews__i" ref={ref} onClick={open} src={euroPark} alt="europaP"/>
                        )}
                    </Item>
                    <Item
                        original={park}
                        thumbnail={park}
                        width="1024"
                        height="768"
                    >
                        {({ ref, open }) => (
                            <img className="reviews__images reviews__i" ref={ref} onClick={open} src={park} alt="europaP"/>
                        )}
                    </Item>
                </Gallery>
                <p className="reviews__text">Вы тоже можете оставить свой отзыв, в наших социальных сетях.</p>
                <ul className="reviews__icon">
                    <li className="reviews__icons"><a className="reviews__icons" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                    <li className="reviews__icons"><a className="reviews__icons" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                </ul>
            </div>
        </section>
    );
};

export default Reviews;