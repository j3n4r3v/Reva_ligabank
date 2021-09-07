import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <Link to="/"><img src='./images/logo.png' alt="ЛИГА Банк"></img></Link>
                <p className="footer__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
            </div>
            <ul className="footer__menu">
                <li><Link to="/">Услуги</Link></li>
                <li><Link to="/">Рассчитать кредит</Link></li>
                <li><Link to="/">Контакты</Link></li>
                <li><Link to="/">Задать вопрос</Link></li>
            </ul>
            <div className="footer__contacts">
                <div className="footer__free-mobile">
                    <a href="tel:0904">*0904</a>
                    <p className="footer__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
                </div>
                <div className="footer__free-all">
                    <a href="tel:88001112233">8 800 111 22 33</a>
                    <p className="footer__text">Бесплатный для всех городов России</p>
                </div>
            </div>
            <ul className="footer__social">
                <li><Link className="footer__social-link footer__social-link--facebook" to="/"></Link></li>
                <li><Link className="footer__social-link footer__social-link--instagram" to="/"></Link></li>
                <li><Link className="footer__social-link footer__social-link--twitter" to="/"></Link></li>
                <li><Link className="footer__social-link footer__social-link--youtube" to="/"></Link></li>
            </ul>
        </footer>
    );
};

export default Footer;
