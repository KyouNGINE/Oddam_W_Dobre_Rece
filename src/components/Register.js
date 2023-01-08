import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';

function Login() {
    return(
        <>
            <div className='register_home_container'>
            <ul className='register_logreg_buttons'>
                <li className='register_login_button'>
                    <NavLink to="/login">Zaloguj</NavLink></li>
                <li className='register_reg_button'>
                    <NavLink to='/register'>Załóż konto</NavLink></li>
            </ul>
            </div>
            <ul className='register_info_buttons'>
                <li className='register_start_button'><NavLink to="/">Start</NavLink></li>
                <li className='register_info_button'><a href="#WhatIs">O co chodzi?</a></li>
                <li className='register_about_button'><a href="#AboutUs">O nas</a></li>
                <li className='register_fundation_button'>Fundacja i organizacje</li>
                <li className='register_contact_button'>Kontakt</li>
            </ul>
            <div className='register_title'>Zarejestruj się</div>
            <div className='register_form_container'>
            <div className='register_form'>
                <form>
                    <div className='register_email'>Email</div>
                    <input className='register_email_input'></input>
                    <div className='register_password'>Hasło</div>
                    <input className='register_password_input'></input>
                    <div className='register_2ndpassword'>Powtórz hasło</div>
                    <input></input>
                </form>
            </div>
            </div>
            <div className='register_accounts'>
                <div className='register_register_acc'>Załóż konto</div>
                <div className='register_login_acc'>Zaloguj się</div>
            </div>
        </>
    );
}

export default Login;
