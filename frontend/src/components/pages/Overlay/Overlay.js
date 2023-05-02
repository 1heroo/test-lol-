import React, {useContext, useState} from 'react';
import {CustomContext} from "../../../Context";

import { RxCross2 } from 'react-icons/rx';
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask";

import axios from "axios";
import Order from "../Order/Order";
import './overlay.css'

const Overlay = ({overlayActive, setOverlayActive}) => {
    const current = new Date();
    const date = `${current.getDate()}.${current.getMonth()+1}.${current.getFullYear()}`;

    const {
        reset,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        register
    } = useForm();

    const { user, setUser} = useContext(CustomContext);
    const [orderActive, setOrderActive] = useState(false);

    const addOrder = async (data) => {
    console.log({
            ...data,
            user: user,
            date
        })
        await axios.post('http://0.0.0.0:8000/post/registrations/', {
            ...data,
            user: user,
            date
        }).then(() => {
        console.log({
            ...data,
            user: user,
            date
        })
        });

//        await axios.patch(`http://localhost:8080/users/${user.id}`, {
//            orders: [
//                ...user.orders,
//                {
//                    ...data,
//                    date
//                }
//            ],
//        }).then();
//
//        await axios(`http://localhost:8080/users/${user.id}`).then((res) => setUser(res.data) );

        await reset();
    };
    

    return (
        <>
            <div onClick={() => setOverlayActive(false)} className={overlayActive ? "overlay active" : "overlay"} >
                <form className="overlay__popup" onSubmit={handleSubmit(addOrder)} onClick={e => e.stopPropagation()}>
                    <h2 className="overlay__title">Получить консультацию</h2>
                    <p className="overlay__text">Заполните эти поля, что бы мы смогли Вам помочь</p>
                    <div onClick={() => setOverlayActive(false)}><RxCross2 className="overlay__cross"/></div>
                    <div className="overlay__row">
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Имя</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.name?.message}</span>
                            <input {...register('name', {
                                required : 'Введите имя *',
                            })} className="overlay__input" type="text" placeholder="Имя"/>
                        </label>
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Фамилия</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.last_name?.message}</span>
                            <input {...register('last_name', {
                                required : 'Введите вашу фамилию *',
                            })} className="overlay__input" type="text" placeholder="Фамилия"/>
                        </label>
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Instagram</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.instagram?.message}</span>
                            <input {...register('instagram', {
                                required : 'Введите ваш Instagram *',
                            })} className="overlay__input" type="text" placeholder="@aiperi_3452"/>
                        </label>
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Номер</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.phone?.message}</span>
                            <InputMask {...register("phone", {
                                required : 'Введите номер телефона *',
                            })} className="overlay__input" placeholder="+996554467895" type="tel" mask={`+\\9\\96(999)99-99-99`}/>
                        </label>
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Ваш вопрос</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.description?.message}</span>
                            <textarea {...register('description', {
                                required : 'Пожалуйста, заполните это поле *',
                            })} className="overlay__input2" placeholder="Ваш вопрос" />
                        </label>
                        <label className="overlay__label">
                            <span style={{color: 'white', paddingLeft: '23px'}}>Напишите, кем Вы являетесь сейчас?</span>
                            <span style={{color: 'white', marginLeft: '20px'}}>{errors?.question?.comments}</span>
                            <textarea {...register('question', {
                                required: 'Пожалуйста, заполните это поле *'
                            })} className="overlay__input2" placeholder="О себе" />
                        </label>
                    </div>
                    <button type="submit" disabled={!isValid} className="overlay__btn" onClick={() => setOrderActive(true)}>Отправить запрос</button>
                </form>
            </div>
            <Order active={orderActive} setIsActive={setOrderActive}/>
        </>
    );
};

export default Overlay;