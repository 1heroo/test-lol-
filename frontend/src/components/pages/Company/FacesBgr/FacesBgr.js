import React from 'react';
import { Gallery } from 'react-photoswipe-gallery'

import SliderBgr from "./SliderBgr";

const FacesBgr = () => {
    return (
        <section>
            <div className="container">
                <div className="work__list">
                    <Gallery>
                        <SliderBgr/>
                    </Gallery>
                </div>
            </div>
        </section>
    );
};

export default FacesBgr;