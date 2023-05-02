import React, {useContext, useRef} from 'react';
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";
import {useForm} from 'react-hook-form'
import InputMask from "react-input-mask";
import './register.css'

const Register = () => {
    const {registerUser} = useContext(CustomContext);

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
        <section className="register">
            <form className="register__form" onSubmit={handleSubmit(registerUser)}>
                <h2 className="register__title">Регистрация</h2>
                <input id='1' {...register('email', {
                    required : 'Пожалуйста, заполните это поле *',
                })} className="register__input" type="email" placeholder='Введите email'/>
                <span className="register__span">{errors?.email?.message}</span>
                <input id='2' {...register('login', {
                    required : 'Пожалуйста, заполните это поле *',
                })} className="register__input" type="text" placeholder='Введите login'/>
                <span className="register__span">{errors?.login?.message}</span>
                <InputMask id='3' {...register('phone', {
                    required : 'Пожалуйста, заполните это поле *',
                })} className="register__input" placeholder="+996554467895" type="tel" mask={`+\\9\\96(999)99-99-99`}/>
                <span className="register__span">{errors?.phone?.message}</span>
                <input id='4' {...register('password', {
                    required: 'Пожалуйста, заполните это поле *',
                    minLength: {
                        value: 6,
                        message: "Пароль должен содержать не менее 6 символов"
                    }
                })} className="register__input" type="password" placeholder='Введите пароль'/>
                <span className="register__span">{errors?.password?.message}</span>
                <input id='5' {...register('confirmPwd', {
                    validate: value =>
                        value === password.current || "Пароль не подходит"
                })} className="register__input" type="password" placeholder='Подвердите пароль'/>
                {errors?.confirmPwd && <p className="register__span">{errors?.confirmPwd?.message}</p>}
                <button className="register__btn">Регистрация</button>
                <p className="register__account">
                    Уже есть аккаунт, <Link className="register__acc" to='/login'>Войти</Link>
                </p>
                <Link className="register__acc" to='/'>На главную</Link>


            </form>

        </section>
    );
};

export default Register;