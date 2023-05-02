import React from 'react';
import './work.css'
import {LazyLoadImage} from "react-lazy-load-image-component";
import park from "./logo.svg";


const Work = () => {

    return (
        <>
            <section className="work">
                <div className="container">
                    <div className="work__content">
                        <h2 className="work__title" >Наши партнеры</h2>
                        <div className="work__list" >
                            <LazyLoadImage className="work__image" src={park} alt="park"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="img">
                <div className="container">
                    <h1 className="album__title" >Наш фотоальбом</h1>
                    <p className="album__text" >Фотографии наших студентов.</p>
                </div>
            </section>
        </>
    );
};

export default Work;