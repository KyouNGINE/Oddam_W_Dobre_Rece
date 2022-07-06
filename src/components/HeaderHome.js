import React from 'react';

function HeaderHome() {
    return (

<header>
    <ul className="header_logreg_buttons">
        <li className="header_login_button">Zaloguj</li>
        <li className="header_reg_button">Załóż konto</li>
    </ul>
    <ul className="header_info_buttons">
        <li className="header_start_button">Start</li>
        <li className="header_info_button">O co chodzi?</li>
        <li className="header_about_button">O nas</li>
        <li className="header_fundation_button">Fundacja i organizacje</li>
        <li className="header_contant_button">Kontakt</li>
    </ul>
</header>

    )
}

export default HeaderHome;