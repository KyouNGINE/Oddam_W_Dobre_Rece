import React from 'react';
import People from '../assets/images/People.jpg';
import Sign from '../assets/images/Signature.svg';

function HomeAboutUs() {
    return (
        <div id='AboutUs' className='home_about_us'>
            <div className='home_about_us_left_side'>
                <div className='home_about_us_title'>O nas</div>
                <div className='home_about_us_description'>Nori grape silver beet broccoli kombu beet<br></br>
                greens fava bean potato quandong celery. Bunya<br></br>
                nuts black-eyed pea prairie turnip leek lentil<br></br>
                turnip greens parsnip.</div>
                <div className='home_about_us_sign'><img src={ Sign }/></div>
            </div>
            <img className='home_about_us_right_side' src={ People } alt='people'/>
        </div>
    );
}

export default HomeAboutUs;