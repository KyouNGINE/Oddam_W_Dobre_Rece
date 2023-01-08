import React from 'react';
import HomeHeroImage from '../assets/images/Home-Hero-Image.jpg';
import {
    NavLink,
  } from 'react-router-dom';

function HomeHeader() {
    return (
        <header>
            <div className='header_home_container'>
             <img className='home_hero_image' src={ HomeHeroImage } alt="ubrania"></img>
                <div className='header_home_container_buttons'>
            <ul className='header_logreg_buttons'>
                <li className='header_login_button'>
                    <NavLink to="/login">Zaloguj</NavLink></li>
                <li className='header_reg_button'>
                    <NavLink to='/register'>Załóż konto</NavLink></li>
            </ul>
            <ul className='header_info_buttons'>
                <li className='header_start_button'>Start</li>
                <li className='header_info_button'><a href="#WhatIs">O co chodzi?</a></li>
                <li className='header_about_button'><a href="#AboutUs">O nas</a></li>
                <li className='header_fundation_button'>Fundacja i organizacje</li>
                <li className='header_contact_button'>Kontakt</li>
            </ul>
            <div className='header_home_title'>Zacznij pomagać!</div>
            <div className='header_home_title2'>Oddaj niechciane rzeczy w zaufane ręce</div>
            <ul className='header_home_main'>
                <li className='header_home_main_left_button'><NavLink to="/login">ODDAJ<br></br>RZECZY</NavLink></li>
                <li className='header_home_main_right_button'><NavLink to='/login'>ZORGANIZUJ<br></br>ZBIÓRKĘ</NavLink></li>
            </ul>
            </div>
            </div>
        </header>
    );
}

export default HomeHeader;