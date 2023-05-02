import React from 'react';
import {FaInstagram, FaFacebook} from "react-icons/fa";

import './teacher.css'
import teacher from '../../../images/teacher.png'


const Teacher = () => {
    return (
        <section className="teacher">
            <div className="container">
                <div className="teacher__content">
                    <div className="teacher__left">
                        <h1 className="teacher__title">Вы преподаватель немецкого языка? <br/> У Вас есть сертификат уровня В2 и выше,<br/>а так же опыт в этой сфере?</h1>
                        <div className="teacher__text">Мы ждем Вас в наш дружный коллектив.</div>
                        <div className="teacher__text" style={{display: 'flex', columnGap: '21px', alignItems: 'center'}}>Записывайтесь на собеседование по номеру <a className="teacher__num" href="tel:+996 707 975 311">+996 707 975 311</a></div>
                        <div className="teacher__text" style={{display: 'flex', columnGap: '21px', alignItems: 'center'}}>Также Вы можете написать нам в социальных сетях <div className="teacher__icons"><a className="teacher__icon" href="https://www.instagram.com/reisekg/"><FaInstagram/></a> <a className="teacher__icon" href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a> </div></div>
                        <div className="teacher__text">Mit Freundlichen Grüßen,</div>
                        <h3 className="teacher__h3">Reise Team</h3>
                    </div>
                    <div className="teacher__right">
                        <img className="teacher__img" src={teacher} alt="teacher"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teacher;