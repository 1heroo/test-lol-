import React, {useState} from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

import './buttons.css'

const Buttons = () => {

    const Icon = ({ children }) => (
        <i className="material-symbols-outlined">
            {children}
        </i>
    );

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fab ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <span><RxCross1/></span>
                        : <span><FiPhoneCall/></span>
                }
            </button>
            <div className="menu">
                <button>
                    <Icon><a style={{color: '#FE0000'}} href="https://www.instagram.com/reisekg/"><FaInstagram/></a></Icon>
                    <span>Instagram</span>
                </button>
                <button>
                    <Icon><a style={{color: '#FE0000'}} href="https://www.facebook.com/profile.php?id=100073306719661"><FaFacebook/></a></Icon>
                    <span>Facebook</span>
                </button>
                <button>
                    <Icon><a href="https://wa.me/+996709975311" style={{color: '#FE0000'}}><ImWhatsapp/></a></Icon>
                    <span>ул.Ахунбаева 110а <br/> +996 709 975 311</span>
                </button>
                <button>
                    <Icon><a href="https://wa.me/+996509975311" style={{color: '#FE0000'}}><ImWhatsapp/></a></Icon>
                    <span>ул.Керимбекова, 26  <br/> +996 509 975 311 </span>
                </button>
            </div>
        </div>
    );
};

export default Buttons;