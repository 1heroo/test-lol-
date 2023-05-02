import React from 'react';

import './client.css'
import {LazyLoadImage} from "react-lazy-load-image-component";
import park from "./logo.svg";

const Client = () => {
    return (
        <section className="work">
            <div className="container">
                <div className="work__content">
                    <h2 className="work__title">Наши партнеры</h2>
                    <div className="work__list">
                        <LazyLoadImage className="work__image" src={park} alt="park"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client;