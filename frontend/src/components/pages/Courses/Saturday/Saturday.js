import React from 'react';

import './saturday.css'
import {FaInstagram} from "react-icons/fa";

import saturdayImg from '../../../images/saturdayImg.png'

const Saturday = () => {
    return (
        <section className="saturday">
            <div className="container">
                <div className="saturday__content">
                    <div className="saturday__left">
                        <h2 className="deutsch__title">Sprechen каждую неделю</h2>
                        <p className="saturday__text">
                            Мы проводим бесплатный разговорный клуб для наших студентов, <br/>
                            на котором можно практиковать свой немецкий язык.
                        </p>
                        <p className="saturday__text">
                            Каждый раз не похож на прошлый, преподаватели <br/>
                            готовят игры, викторины, презентации, которые <br/>
                            дают возможность поговорить на разные темы.
                        </p>
                        <p className="saturday__p">Когда следующий?</p>
                        <p className="saturday__p">Кто будет вести его?</p>
                        <p className="saturday__p">Дату и тематику следующей встречи, <br/> можете узнать у нас в инстаграмме</p>
                        <div className="saturday__button">
                            <a href="https://www.instagram.com/reisekg/" className="saturday__btn"><FaInstagram style={{color: '#FE0000'}}/>@reisekg</a>
                        </div>
                        <p className="saturday__text">
                            Ответы можно найти здесь, наши менеджера выкладывают <br/>
                            все самое актуальное про курсы и не только!
                        </p>
                    </div>
                    <div className="saturday__right">
                        <img className="saturday__img" src={saturdayImg} alt="saturdayImg"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Saturday;