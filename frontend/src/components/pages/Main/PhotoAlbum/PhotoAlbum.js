import React from 'react';
import { Gallery } from 'react-photoswipe-gallery'

import './album.css'

import AlbumSlider from './AlbumSlider/AlbumSlider'


const PhotoAlbum = () => {

    return (
        <section className="album">
            <div className="container">
                <div className="album__card" >
                    <Gallery>
                        <AlbumSlider/>
                    </Gallery>
                </div>
                <p className="album__text" >Мы очень счастливы видеть, как Вы путешествуете, улыбаетесь. <br/> Это лучшая награда.</p>
            </div>
        </section>
    );
};

export default PhotoAlbum;