import React, {useState} from 'react';

import './courses.css'

import {RiRoadMapFill} from "react-icons/ri";
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import { ImWhatsapp } from 'react-icons/im';

import Deutsch from "./Deutsch/Deutsch";
import Saturday from "./Saturday/Saturday";
import Teacher from "./Teacher/Teacher";
import Overlay from "../Overlay/Overlay";
import Buttons from "../../../Buttons";

const Courses = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="courses">
                <div className="container">
                    <div className="courses__content">
                        <div className="courses__left">
                            <h2 className="courses__title">Курсы немецкого языка от Reise</h2>
                            <p className="courses__text">С лучшими преподавателями от А1 до В1</p>
                            <button className="courses__btn" onClick={() => setOpen(true)}>Записаться на курс</button>
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

            <Deutsch/>
            <Saturday/>
            <Teacher/>
            <Overlay overlayActive={open} setOverlayActive={setOpen}/>

            <Buttons/>
        </>
    );
};

export default Courses;