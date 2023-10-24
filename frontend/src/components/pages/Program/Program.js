import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Context";

import './programCss//program.css'
import './programCss/annual.css'
import './programCss/certificate.css'

import programImg from './programImage/programImg.png'
import jobImg from './programImage/jobImg.png'
import certificateImg from './programImage/certificateImg.png'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Overlay from "../Overlay/Overlay";
import Buttons from "../../../Buttons";

import {FaCircle} from 'react-icons/fa'


const Program = () => {
    const {tab, toggleTab} = useContext(CustomContext);
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="program">
                <div className="container">
                    <div className="program__top">
                        <h2 className="program__title" data-aos="zoom-out-up">Наши программы</h2>
                        <div className="program__button" data-aos="zoom-in">
                            <button className={tab === 1 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(1)}>Летняя работа</button>
                            <button className={tab === 2 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(2)}>Годовая работа</button>
                            <button className={tab === 3 ? "program__btn program__btn_active" : "program__btn"} onClick={() => toggleTab(3)}>Ausbildung</button>
                        </div>
                    </div>

                    <div className={tab === 1 ? "program__tabs program__tabs_active" : "program__tabs"}>
                        <div data-aos="fade-right">
                            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                            </svg>
                            <p className="program__text">Самая любимая программа наших студентов</p>
                            <div className="program__line"/>
                            <h2 className="program__left-title">Ferienjob или Летняя работа</h2>
                        </div>
                        <div className="program__content">
                            <div className="program__left">
                                <div className="program__info" data-aos="fade-right">
                                    <span>
                                        <h4 className="program__h4">Условия:</h4>
                                        <p className="program__p">- Зарплата от 13 евро в час; <br/> - Проживание 250-600 евро в месяц; <br/> - Питание зависит от работодателя.</p>
                                    </span>
                                    <span>
                                        <h4 className="program__h4">Требования:</h4>
                                        <p className="program__p">- Быть студентом не последнего курса очного отделения; <br/> - Официальные летние каникулы 2-3 месяца; <br/> - Стремление учить немецкий язык.</p>
                                    </span>
                                </div>
                                <h4 className="program__h5" data-aos="fade-right">Первичный пакет документов:</h4>
                            </div>
                            <div className="program__right" data-aos="fade-left">
                                <LazyLoadImage
                                    className="program__img"
                                    alt="programImg"
                                    src={programImg}
                                    effect="blur"
                                />
                            </div>
                        </div>
                        <div className="program__row" data-aos="fade-right">
                            <p className="program__p">- Паспорта <br/> (ID и загранпаспорт);</p>
                            <p className="program__p">- Фотография в электронном виде <br/> (с улыбкой);</p>
                            <p className="program__p">- Сертификат о знании немецкого языка на уровне A2-B1 <br/> (при наличии)</p>
                        </div>
                    </div>
                    <div className={tab === 2 ? "program__tabs program__tabs_active" : "program__tabs"}>
                        <section className="annual">
                            <div className="container">
                                <div data-aos="fade-right">
                                    <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                    </svg>
                                    <p className="certificate__text">Работа для дипломированных специалистов</p>
                                    <div className="annual__line"/>
                                    <h2 className="annual__left-title">Годовая работа</h2>
                                </div>
                                <div className="annual__content">
                                    <div className="annual__left">
                                        <div className="annual__info" data-aos="fade-right">
                                                <span>
                                                    <h4 className="annual__h4">Условия:</h4>
                                                    <p className="annual__p">- Зарплата 1800-2550 евро в месяц <br/>- Проживание 200-350 евро в месяц <br/> - Питание зависит от работодателя</p>
                                                </span>
                                            <span>
                                                    <h4 className="annual__h4">Требования:</h4>
                                                    <p className="annual__p">- Быть выпускником университета с дипломом. <br/> - Возраст 18-35 лет <br/>- Требуемый уровень В1 (Если нет знания языка <br/> - поможем выучить!)</p>
                                                </span>
                                        </div>
                                        <h4 className="annual__h4" data-aos="fade-right">Первичный пакет документов:</h4>
                                    </div>
                                    <div className="annual__right" data-aos="fade-left">
                                        <LazyLoadImage
                                            className="annual__img"
                                            alt="jobImg"
                                            src={jobImg}
                                            effect="blur"
                                        />
                                    </div>
                                </div>
                                <div className="annual__euro" data-aos="fade-right">
                                    <p className="annual__p">- Паспорта <br/> (ID и загранпаспорт);</p>
                                    <p className="annual__p">- Резюме на немецком языке <br/>(Пример резюме по Europass)</p>
                                    <p className="annual__p">- Диплом <br/> ( с переводом на нем.язык с нотариальным заверением)</p>
                                </div>
                            </div>
                        </section>
                        <section className="diploma" data-aos="fade-right">
                            <div className="container">
                                <h2 className="diploma__title" data-aos="fade-right">Требуется диплом по специальностям:</h2>
                                <div className="diploma__content">
                                    <ul className="diploma__list" data-aos="fade-right">
                                        <li className="diploma__title">Техническая сфера</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Прикладная механика</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Машиностроение</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Логистика</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Инфоромационные системы и технологии</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Электроэнергетика</li>

                                    </ul>
                                    <ul className="diploma__list" data-aos="zoom-in">
                                        <li className="diploma__title">Сфера гостеприимства</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Туризм</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Международный туризм</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Менеджмент туризма и гостиничного дела</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Туристический бизнес и служба гидов</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Ресторанное дело и искусство кулинарии</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Гостиничное дело</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Менеджмент</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Управление бизнесом</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Экономика</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Пищевая инженерия </li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Технология продукции и организация общественного питания</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Германистика</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Лингвистика(немецкий язык) </li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Филология немецкого языка</li>

                                    </ul>
                                    <ul className="diploma__list" data-aos="fade-right">
                                        <li className="diploma__title">Медицинская сфера</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Медсестры: закончившие колледж или университет</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Медсестры: закончившие медицинские училище</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Косметолог</li>
                                        <li className="diploma__item"><div><FaCircle className="diploma__line"/></div>Массажист</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={tab === 3 ? "program__tabs program__tabs_active" : "program__tabs"}>
                        <section className="certificate">
                            <div className="container">
                                <div data-aos="fade-right">
                                    <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.00141144 17.5L36.0014 0.612505L36.0014 34.3875L0.00141144 17.5Z" fill="#FE0000"/>
                                    </svg>
                                    <p className="certificate__text">Программа для выпусников </p>
                                    <div className="certificate__line"/>
                                    <h2 className="certificate__left-title">Ausbildung <span style={{color: '#FE0000', fontSize: '20px'}}>(Дуальное обучение)</span></h2>
                                </div>
                                <div className="certificate__content">
                                    <div className="certificate__left">
                                        <div data-aos="fade-right" className="certificate__info">
                                        <span>
                                            <h4 className="certificate__h4">Условия:</h4>
                                            <p className="certificate__p">- Стипендия (зарплата) 1000-1100€ в месяц <br/> - Проживание 200-300€ в месяц - Питание зависит от работодателя</p>
                                        </span>
                                            <span>
                                                    <h4 className="certificate__h4">Требования:</h4>
                                                    <p className="certificate__p">- Иметь аттестат 11 класса или диплом колледжа/университета <br/>- Возраст 18-35 лет <br/> - Сертификат уровня В1 (все части) c (Deutsches Sprachdiplom/ÖSD/ Goethe-Zertifikat/TestDaF/TELC)</p>
                                                </span>
                                        </div>
                                        <h4 className="certificate__h4" data-aos="fade-right">Первичный пакет документов:</h4>
                                    </div>
                                    <div className="certificate__right" data-aos="fade-left">
                                        <LazyLoadImage
                                            className="certificate__img"
                                            alt="certificateImg"
                                            src={certificateImg}
                                            effect="blur"
                                        />
                                    </div>
                                </div>
                                <div className="certificate__row" data-aos="fade-right">
                                    <p className="certificate__p">- Аттестат 11 класса или ДИПЛОМ <br/> (с переводом на нем. язык)</p>
                                    <p className="certificate__p">- Паспорта <br/>(ID и загранпаспорт);</p>
                                    <p className="certificate__p">- Резюме на немецком  <br/>(пример резюме по Europass)</p>
                                    <p className="certificate__p">- Cертификат B1 <br/>(если его нет, то надо получить)</p>
                                </div>
                                <div className="certificate__block">
                                    <div data-aos="fade-right">
                                        <h3 className="certificate__h3">Обучение подходит по специальностям</h3>
                                        <ul>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Fachmann/Frau für Systemgastronomie (эксперт в сфере обслуживания)</li>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Restaurantfachfrau/Mann (эксперт по Ресторанному делу)</li>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Hotelfachmann/Frau (эксперт по отельному делу)</li>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Fachkraft im Gastgewerbe (эксперт в сфере гостеприимства)</li>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Koch/in (повар)</li>
                                            <li className="certificate__list"><div><FaCircle className="certificate__radius"/></div>Если вам нужна информация о других специальностях,<br/> пожалуйста, обратитесь в наш офис или оставьте заявку на консультацию. <br/>Мы с удовольствием ответим на все ваши вопросы<br/> и предоставим необходимую информацию.</li>
                                        </ul>
                                    </div>
                                    <div className="certificate__block-radius" data-aos="fade-left">
                                        <h2 className="certificate__block-title">Как будет проходить <br/> обучение?</h2>
                                        <p className="certificate__block-text">
                                            Дуальное обучение длится от 2 до 3 лет <br/> и представляет собой уникальную<br/> возможность сочетать теорию <br/> с практикой на рабочем месте.
                                        </p>
                                        <p className="certificate__block-text">
                                            Практическая составляющая до 80%,<br/> теоретическая - до 20%.
                                        </p>
                                        <p className="certificate__block-text">После окончания обучения,<br/> есть возможность остаться <br/>в Германии и трудоустроиться. </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <button className="program__btns" data-aos="fade-right" onClick={() => setOpen(true)}>Консультация</button>
                </div>
            </section>

            <Overlay overlayActive={open} setOverlayActive={setOpen}/>
            <Buttons/>
        </>
    );
};

export default Program;
