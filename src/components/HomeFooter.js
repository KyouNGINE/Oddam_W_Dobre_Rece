import React, { useState } from 'react';
import ReadyClothes from '../assets/images/Background-Contact-Form.jpg';
import FBlogo from '../assets/images/Facebook.svg';
import IGlogo from '../assets/images/Instagram.svg';

const HomeFooter = () => {
    const [title, setTitle] = useState('');

    return (
        <div className='footer_container'>
            <img className='footer_hero_img' src={ ReadyClothes }/>
            <div className='footer_main_info'>Skontaktuj się z nami
            <div className='footer_form'>
                <form>
                    <label>Imię</label>
                    <input classname='footer_form_name' type="text" required value={title}/>
                    <label>Email</label>
                    <input classname='footer_form_email' type="text" required/>
                    <label>Wiadomość</label>
                    <textarea classname='footer_form_message' required></textarea>
                </form>
            </div>    
            <img src={ FBlogo }/>
            <img src={ IGlogo }/>
        </div>
        </div>

    );
};

export default HomeFooter;