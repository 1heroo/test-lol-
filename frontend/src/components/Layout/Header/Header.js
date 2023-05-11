import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Context";
import {NavLink, Link} from "react-router-dom";

import './header.css'

import logo from './logo.png'
import Overlay from "../../pages/Overlay/Overlay";


const Header = () => {
    const {user} = useContext(CustomContext);
    const [open, setOpen] = useState(false);
    const {openJob, burger, setBurger} = useContext(CustomContext);

    const closeCart = (e) => {
        if (e.target.class === 'burgers') {

        }
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <Link to='/'><img className="header__img" src={logo} alt="logo"/></Link>
                    <ul onClick={closeCart} className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <NavLink to='/' className="header__link">На главную</NavLink>
                        <NavLink to='/program' className="header__link">Наши программы</NavLink>
                        <li onClick={() => setOpen(!openJob)} className="header__link">Консультация</li>
                        <NavLink to='/company' className="header__link">О компании</NavLink>
                        <NavLink to='/courses' className="header__link">Курсы</NavLink>
                        <li className="header__link">
                            {
                                user?.username?.length
                                    ? <NavLink to='/admin' className="header__link">Администрация</NavLink>
                                    : <NavLink to='/login' className="header__link">Войти</NavLink>
                            }
                        </li>
                    </ul>
                    <div className={`burger ${burger ? 'burger_active' : ''}`} onClick={() => setBurger(!burger)}>
                        <span className="burger__line"/>
                    </div>
                    <div onClick={() => setBurger(false)} className={`burgers ${burger ? 'burgers_active' : ''}`}>

                    </div>
                </nav>
            </div>

            <Overlay overlayActive={open} setOverlayActive={setOpen}/>
        </header>
    );
};

export default Header;