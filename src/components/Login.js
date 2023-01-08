import React from 'react';
import {
    NavLink,
  } from 'react-router-dom';

function Login() {
    return(
        <>
            <div className='login_home_container'>
            <ul className='login_logreg_buttons'>
                <li className='login_login_button'>
                    <NavLink to="/login">Zaloguj</NavLink></li>
                <li className='login_reg_button'>
                    <NavLink to='/register'>Załóż konto</NavLink></li>
            </ul>
            </div>
            <ul className='login_info_buttons'>
                <li className='login_start_button'><NavLink to="/">Start</NavLink></li>
                <li className='login_info_button'><a href="#WhatIs">O co chodzi?</a></li>
                <li className='login_about_button'><a href="#AboutUs">O nas</a></li>
                <li className='login_fundation_button'>Fundacja i organizacje</li>
                <li className='login_contact_button'>Kontakt</li>
            </ul>
            <div className='login_title'>Zaloguj się</div>
            <div className='login_form_container'>
            <div className='login_form'>
                <form>
                    <div className='login_email'>Email</div>
                    <input className='login_email_input'></input>
                    <div className='login_password'>Hasło</div>
                    <input></input>
                </form>
            </div>
            </div>
            <div className='login_accounts'>
                <div className='login_register_acc'>Załóż konto</div>
                <div className='login_login_acc'>Zaloguj się</div>
            </div>
        </>
    );
}

export default Login;
