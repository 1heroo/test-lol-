import React, {useState} from 'react';
import {Gallery, Item} from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

import './paris.css'
import Overlay from "../../Overlay/Overlay";
import parisImg from "../../../images/company-t.jpeg";
import teamC from "../../../images/team-c.jpeg";


const Paris = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="paris">
                <div className="container">
                    <div className="paris__content">
                        <div className="paris__left">
                            <p className="paris__text">Ежегодно мы проводим встречи с работодателями из Германии, чтобы посмотреть условия работы и учебы.</p>
                            <p className="paris__text">Europa-Park — является одним из основных партнеров нашей компании. Это крупнейший парк развлечений в Германии. <br/> Хочется подчеркнуть, что мы являемся его единственными представителями в Кыргызстане.  <br/>  <br/> Находится в городе Руст в <br/> федеральной земле Баден-Вюртемберг на юго-западе <br/> Германии. Был открыт в 1975 году.</p>
                            <button className="paris__btn" onClick={() => setOpen(true)}>Узнать больше</button>
                        </div>
                            <div className="paris__right">
                                <Gallery>
                                    <Item
                                        original={parisImg}
                                        thumbnail={parisImg}
                                        width="1024"
                                        height="768"
                                    >
                                        {({ ref, open }) => (
                                            <img className="paris__img" ref={ref} onClick={open} src={parisImg} alt="parisImg"/>
                                        )}
                                    </Item>
                                    <Item
                                        original={teamC}
                                        thumbnail={teamC}
                                        width="1024"
                                        height="768"
                                    >
                                        {({ ref, open }) => (
                                            <img className="paris__img paris-image" ref={ref} onClick={open} src={teamC} alt="parisImg"/>
                                        )}
                                    </Item>
                                </Gallery>
                            </div>
                    </div>
                </div>
            </section>
            <Overlay overlayActive={open} setOverlayActive={setOpen}/>
        </>
    );
};

export default Paris;