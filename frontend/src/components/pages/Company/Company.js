import React, {useState} from 'react';

import './company.css'

import {RiRoadMapFill} from "react-icons/ri";
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im';


import License from "./License/License";
import Client from "./Client/Client";
import Faces from "./Faces/Faces";
import Paris from "./Paris/Paris";
import Reviews from "./Reviews/Reviews";
import Overlay from "../Overlay/Overlay";
import FacesBgr from "./FacesBgr/FacesBgr";
import Buttons from "../../../Buttons";

const Company = () => {
    const [open, setOpen] = useState(false);


    return (
        <>
            <section className="company" id="program">
                <div className="container">
                    <div className="company__content">
                        <div className="company__left">
                            <h1 className="company__title">Мы компания, которая <br/> открывает дверь в Европу</h1>
                            <button onClick={() => setOpen(true)} className="company__btn">Консультация</button>
                        </div>
                        <ul className="company__icons" >
                            <ul style={{display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '9px'}}>
                                <li className="company__icon"><a className="company__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a></li>
                                <li className="company__icon"><a className="company__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></li>
                            </ul>
                            <ul>
                                <li className="company__icon" style={{display: 'flex', alignItems: 'center', columnGap: '9px'}}><RiRoadMapFill className="company__icon"/><a className="company__icon" href="https://go.2gis.com/gbqggj">ул.Ахунбаева 110а </a></li>
                                <li className="company__number" style={{paddingLeft: '33px'}}><a href="tel:+996 779 975 311" className="company__number">+996 (779) 975-311</a></li>
                                <li className="company__number" style={{paddingLeft: '33px'}}><a href="tel:+996 559 975 311" className="company__number">+996 (559) 975-311</a></li>
                                <li className="company__number" style={{display: 'flex', alignItems: 'center', columnGap: '9px'}}><ImWhatsapp/><a href="https://wa.me/+996709975311" className="company__number">+996 (709) 975-311 </a></li>
                            </ul>
                            <ul>
                                <li className="company__icon" style={{display: 'flex', alignItems: 'center', columnGap: '9px'}}><RiRoadMapFill className="company__icon"/><a className="company__icon" href="https://go.2gis.com/h4ac6">ул.Керимбекова 26 </a></li>
                                <li className="company__number" style={{paddingLeft: '33px'}}><a href="tel:+996 999 975 311" className="company__number">+996 (999) 975-311</a></li>
                                <li className="company__number" style={{paddingLeft: '33px'}}><a href="tel:+996 222 975 311" className="company__number">+996 (222) 975-311</a></li>
                                <li className="company__number" style={{display: 'flex', alignItems: 'center', columnGap: '9px'}}><ImWhatsapp/><a href="https://wa.me/+996509975311" className="company__number">+996 (509) 975-311 </a></li>
                            </ul>
                        </ul>
                    </div>
                </div>

            </section>
            <License/>
            <Faces/>
            <FacesBgr/>
            <Client/>
            <Paris/>
            <Reviews/>
            <Overlay overlayActive={open} setOverlayActive={setOpen}/>


            <Buttons/>
        </>
    );
};

export default Company;
