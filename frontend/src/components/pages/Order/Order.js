import React from 'react';
import './order.css'

import like from './like.png'

const Order = ({active, setIsActive}) => {

    return (
        <section className={active ? "order active" : "order"} onClick={() => setIsActive(false)}>
            <div className="order__content" onClick={e => e.stopPropagation()}>
                <h1 className="order__title">Благодарим за Ваш вопрос</h1>
                <p className="order__text">Мы скоро свяжемся с Вами</p>
                <span className="order__span">
                    <img src={like} alt="like"/>
                </span>
            </div>
        </section>
    );
};

export default Order;