import React, {useState} from 'react';

import {FaInstagram, FaFacebook} from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im';
import { RiRoadMapFill } from 'react-icons/ri';

import './main.css'

import Course from "./Course/Course";
import Work from "./Work/Work";
import Official from "./Official/Official";
import PhotoAlbum from "./PhotoAlbum/PhotoAlbum";
import Overlay from "../Overlay/Overlay";
import Buttons from "../../../Buttons";


const Main = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="main" >
                <div className="container">
                    <div className="main__content">
                        <div className="main__left" >
                            <h2 className="main__title main__title_active">Все мечты сбываются с Reise!</h2>
                            <p className="main__text">Работай, учись и путешествуй вместе с нами</p>
                            <button onClick={() => setOpen(true)} className="main__btn">Консультация</button>
                        </div>
                        <ul className="main__icons" >
                            <li className="main__icon"><a className="main__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                            <li className="main__icon"><a className="main__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                            <li className="main__icon"><a className="main__icon" href="https://go.2gis.com/h8bdv">ул.Ахунбаева 110а <RiRoadMapFill className="main__icon"/></a></li>
                            <ul>
                                <li className="main__number"><a href="tel:+996 779 975 311" className="main__number">+996 (779) 975-311</a></li>
                                <li className="main__number"><a href="tel:+996 559 975 311" className="main__number">+996 (559) 975-311</a></li>
                                <li className="main__number"><a href="https://wa.me/+996709975311" className="main__number">+996 (709) 975-311 <ImWhatsapp/></a></li>
                            </ul>
                            <li className="main__icon"><a className="main__icon" href="https://go.2gis.com/h4ac6">ул.Керимбекова, 26 <RiRoadMapFill className="main__icon"/></a></li>
                            <ul>
                                <li className="main__number"><a href="tel:+996 999 975 311" className="main__number">+996 (999) 975-311</a></li>
                                <li className="main__number"><a href="tel:+996 222 975 311" className="main__number">+996 (222) 975-311</a></li>
                                <li className="main__number"><a href="https://wa.me/+996509975311" className="main__number">+996 (509) 975-311 <ImWhatsapp/></a></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>

            <Course/>
            <Official/>
            <Work/>
            <PhotoAlbum/>
            <Overlay overlayActive={open} setOverlayActive={setOpen}/>



            <Buttons/>
        </>
    );
};

export default Main;