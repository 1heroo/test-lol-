import React from 'react';

import cart from '../../../images/cart.png'
import cart2 from '../../../images/cart2.png'
import cart3 from '../../../images/cart3.png'

import './official.css'


const Official = () => {

    return (
        <section className="official">
            <div className="container">
                <h2 className="official__title">Преимущества</h2>
                <div className="official__card" >
                    <img className="official__img" src={cart} alt="cart"/>
                    <img className="official__img2" src={cart2} alt="cart2"/>
                    <img className="official__img3" src={cart3} alt="cart3"/>
                </div>
            </div>
        </section>
    );
};

export default Official;