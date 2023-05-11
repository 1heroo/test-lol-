import React, {useContext, useRef} from 'react';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import './login.css'
import {CustomContext} from "../../../Context";


const Admin = () => {
    const {loginAdmin} = useContext(CustomContext);


    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch,
    } = useForm({
            mode: 'onBlur'
        }
    );
    const password = useRef({});
    password.current = watch("password", "");


    return (
        <section className="login">
            <form className="login__form" onSubmit={handleSubmit(loginAdmin)}>
                <h2 className="login__title">Вход</h2>
                <input {...register('username', {
                    required : 'Пожалуйста, заполните это поле *',
                })} className="login__input" type="text" placeholder='Введите email'/>
                <span className="login__span">{errors?.username?.message}</span>
                <input {...register('password', {
                    required : 'Пожалуйста, заполните это поле *',
                    minLength: {
                        value: 6,
                        message: "Пароль должен содержать не менее 6 символов"
                    }
                })} className="login__input" type="password" placeholder='Введите пароль'/>
                <span className="login__span">{errors?.password?.message}</span>
                <button className="login__btn">Войти</button>
                {/*<p className="login__account">*/}
                {/*    Нет аккаунта, <Link className="login__acc" to='/register'>Регистрация</Link>*/}
                {/*</p>*/}
                <Link className="login__acc" to='/'>На главную</Link>
            </form>
        </section>

    );
};

export default Admin;