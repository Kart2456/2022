import React from 'react';
import Logo from '../ostrov.svg'
import './NB.css'

export default function NB() {
    return (
        <div className = "NavBar">
            <div className = "box">
                <img className = "logo" src={Logo} />
            </div>
            <div class="panel">
                <a href="#AboutCompany" className = "element">О компании</a>
                <a href="#Gallery" className = "element">Фотогалерея</a>
                <a href="#Price" className = "element">Прайс</a>
                <a href="#Contact" className = "element1">Контакты</a>
            </div>
            <div className = "contact">
                <a href="tel:88632985198" className = "phone">8 (863) 298-51-98</a>
                <p className = "street">ул. Лесопарковая, 23</p>
            </div>
        </div>
    );
}