import React, { useState } from 'react';
import ReadyClothes from '../assets/images/Background-Contact-Form.jpg';
import FBlogo from '../assets/images/Facebook.svg';
import IGlogo from '../assets/images/Instagram.svg';

const HomeFooter = () => {
    const [title, setTitle] = useState('');

    return (
        <>
            <div className='footer_container'>
                <img className='footer_hero_img' src={ReadyClothes}/>
                <div className='div_test'>
                    <div className='div_test2'>elo</div>
                </div>

            </div>
        </>
    );
};

export default HomeFooter;