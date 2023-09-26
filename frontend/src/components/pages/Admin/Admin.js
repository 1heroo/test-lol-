import React, {useContext, useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {Link} from 'react-router-dom'
import {CustomContext} from "../../../Context";
import axios from "axios";
import InputMask from 'react-input-mask'
import trashIcon from "../../images/trash-bin.png"
import {BsPencilFill} from 'react-icons/bs';
import {ImCross} from 'react-icons/im'

import './admin.css'

const Admin = () => {
    const {user, setUser, logOutAdmin,getHistoryQuery,historyQuery, setHistoryQuery} = useContext(CustomContext);
    const [tab, setTab] = useState(1);
    const [userChange, setUserChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState(false);

    // const [admin, setAdmin] = useState([]);
    //
    // const onRemoveItem = (id) => {
    //     axios.post(`http://localhost:8080/orders/${id}`);
    //     setAdmin(admin.filter(item => item.id !== id));
    // };

    const {
        register,
        formState: {
            errors
        },
        watch,
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });

    console.log(historyQuery);
    const password = useRef({});
    password.current = watch("password1", "");

    const changeUser = (data) => {
//        axios.patch(`http://0.0.0.0:8000/users/${user.id}`, data)
        axios.put("https://api.reise.kg/api/post/profile/", data,{
        headers:{
        "Authorization" : `Bearer ${user.access}`}
        })
            .then(({data}) => {
                setUser({...user, ...data});
                localStorage.setItem('user', JSON.stringify({...user, ...data}));
                setUserChange(false);
            })
    };

    const changePassword = (data) => {
    console.log(data, "-----");
//        axios.patch(`http://0.0.0.0:8000/users/${user.id}`, {password: data.password})
        axios.post("https://api.reise.kg/api/post/change-password", data,{
        headers:{
        "Authorization" : `Bearer ${user.access}`}
        })
            .then((res) => {
            console.log(res);
            setPasswordChange(false)})
    };
    const deleteQuestion = (id) => {
    console.log(id);
    axios.delete(`https://api.reise.kg/api/post/registrations/${id}/`,{
        headers:{
        "Authorization" : `Bearer ${user.access}`}
        }).then(res => {
        setHistoryQuery(prev => prev.filter(it => it.slug !== id))
        alert("Удалено")
    })
    }

    return (
        <section className="admin">
            <div className="container">
                <div className="admin__top">
                    {
                        tab === 1 ? <h1 className="admin__title">Настройка профиля</h1> : <h1 className="admin__title">Администрация</h1>
                    }
                    <div className="admin__buttons">
                        <button className={tab === 3 ? "admin__btn" : "admin__btn_active"} onClick={() => setTab(3)}>Админ панель</button>
                        <button className={tab === 2 ? "admin__btn" : "admin__btn_active"} onClick={() => {
                        setTab(2)
                        getHistoryQuery()
                        }}>История заявок</button>
                        <button className={tab === 1 ? "admin__btn" : "admin__btn_active"} onClick={() => setTab(1)}>Профиль</button>
                    </div>
                </div>
                <div className={tab === 1 ? "admin__tabs admin__tabs_active" : "admin__tabs"}>
                    <div className="admin__all">
                        <form onSubmit={handleSubmit(changeUser)} className="admin__content">
                            <div className="admin__change">
                                <h3 className='admin__content-title'>Личные данные</h3>
                                <span>
                                        <span className='admin__content-write' onClick={() => setUserChange(!userChange)}>
                                            {userChange ? <><ImCross/> Отменить </> : <>
                                                <BsPencilFill/> Изменить </>}
                                        </span>
                                </span>
                            </div>
                            <div className="admin__info">
                                <p className='admin__info-about'>
                                    <span className='admin__info-upper'>Логин</span>
                                    {userChange ?
                                        <input className='admin__info-input' {...register('login')}
                                               defaultValue={user?.login} type="text"/> : user?.username}
                                </p>
                                <p className='admin__info-about'>
                                    <span className='admin__info-upper'>Номер телефона*:</span>
                                    {userChange ? <InputMask className='admin__info-input' {...register('phone')}
                                                             mask={`+\\9\\96(999)99-99-99`}
                                                             defaultValue={user.phone} type="tel"/> : user?.phone}
                                </p>
                                <p className='admin__info-about'>
                                    <span className='admin__info-upper'>Почта</span>
                                    {userChange ?
                                        <input className='admin__info-input' {...register('email')}
                                               defaultValue={user.email} type="email"/> : user.email}
                                </p>
                            </div>


                            {userChange ?
                                <button className='admin__info-save' type='submit'>Сохранить изменения</button> : ''
                            }

                        </form>
                        <form onSubmit={handleSubmit(changePassword)} className='admin__content'>
                            <div className="admin__change">
                                <h3 className='admin__content-title'>Пароль</h3>
                                <span>
                        <span className='admin__content-write' onClick={() => setPasswordChange(!passwordChange)}>
                            {passwordChange ? <><ImCross/> Отменить </> : <>
                                <BsPencilFill/> Изменить </>}
                        </span>
                        </span>
                            </div>
                            {passwordChange ? <div className='admin__info'>
                                <p className='admin__info-about'>
                                    <span className='admin__info-upper'>Новый пароль</span>
                                    <input className='admin__info-input' {...register('password1', {
                                        required: "Вы должны указать пароль",
                                        minLength: {
                                            value: 5,
                                            message: "Пароль должен содержать не менее 6 символов"
                                        }
                                    })} type="password"/>
                                    {errors?.password1 && <p>{errors?.password1?.message}</p>}
                                </p>
                                <p className='admin__info-about'>
                                    <span className='admin__info-upper'>Подтвердите пароль</span>
                                    <input className='admin__info-input' {...register('password2', {
                                        validate: value =>
                                            value === password.current || "Пароль не подходит"
                                    })} type="password"/>
                                    {errors?.password2 && <p>{errors?.password2?.message}</p>}
                                </p>
                            </div> : ''
                            }
                            {passwordChange ?
                                <button className='admin__info-save' type='submit'>Сохранить изменения</button> : ''}
                        </form>
                        <div className="admin__content">
                            {
                                user?.username?.length ?
                                    <Link className="admin__out" to='/' onClick={() => logOutAdmin()}>Выйти</Link> : ''
                            }
                        </div>
                    </div>
                </div>
                <div className={tab === 2 ? "admin__tabs admin__tabs_active" : "admin__tabs"}>
                    <h2 className="admin__h2">История</h2>
                    {
                        historyQuery?.map((item, idx) => (
                            <div className="admin__history" key={idx}>
                                <div className="admin__row">
                                    <div>{item.date_created}</div>
                                    <div>
                                        <h3>Имя</h3>
                                        <p>{item.name}</p>
                                    </div>
                                    <div>
                                        <h3>Фамилия</h3>
                                        <p>{item.last_name}</p>
                                    </div>
                                    <div>
                                        <h3>Instagram</h3>
                                        <p> {item.instagram}</p>
                                    </div>
                                    <div>
                                        <h3>Номер телефона</h3>
                                        <p>  {item.phone}</p>
                                    </div>
                                    <div>
                                        <h3>Ваш вопрос</h3>
                                        <p>{item.question}</p>
                                    </div>
                                    <div>
                                        <h3>О себе</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <button onClick={() => deleteQuestion(item.slug)}><img className="delete__img__btn" src={trashIcon} alt="delete"/></button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={tab === 3 ? "admin__tabs admin__tabs_active" : "admin__tabs"}>
                    Admin panel
                </div>
            </div>
        </section>
    );
};

export default Admin;
