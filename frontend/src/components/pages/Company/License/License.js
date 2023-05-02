import React from 'react';
import 'photoswipe/dist/photoswipe.css'

import './license.css'
import permission from '../../../images/permission.png'


const License = () => {
    return (
        <section className="license">
            <div className="container">
                <div className="license__content">
                    <div className="license__left">
                        <h2 className="license__title">Давайте знакомиться ближе</h2>
                        <p className="license__text">Мы помогаем с работой и учебой всем желающим.</p>
                        <p className="license__text">
                            С каждым годом, мы <span style={{color: '#FE0000'}}>улучшаем</span> качество нашей работы, <br/>
                            отбираем только <span style={{color: '#FE0000'}}>достойных </span>
                            работодателей, <span style={{color: '#FE0000'}}>добавляем</span> новые<br/> вакансии.
                        </p>
                        <p className="license__text">
                            Разберем чем мы занимаемся? Мы консультируем и помогаем <br/>
                            подобрать <span style={{color: '#FE0000'}}>лучший вариант</span> для каждого. Также мы занимаемся <br/>
                            всей документацией, чтобы все было оформлено правильно, <br/>
                            занимаем очередь в посольстве.
                        </p>
                        <p className="license__text">
                            Помимо этого мы предоставляем <span style={{color: '#FE0000'}}>полное</span> визовое  сопровождение.<br/>
                            Находим <span style={{color: '#FE0000'}}>подход</span> к каждому клиенту.
                        </p>
                        <p className="license__text">
                            А так же у нас есть курсы немецкого языка. <span style={{color: '#FE0000'}}>На них мы эффективно </span> <br/> подготовим Вас к нашим программам.
                        </p>

                    </div>
                    <div className="license__right">
                        <h3 className="license__h3">Лицензия ДВМ при МИД 000623</h3>
                        <img className="license__img" src={permission} alt="permission"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default License;