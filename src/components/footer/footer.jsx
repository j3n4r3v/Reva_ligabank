import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import logo from "../../images/logo.svg"

const Footer = () => {
    return (
        <BrowserRouter>
        <footer className="footer">
                <div className="footer__logo">
                    <Link to="/" className="footer__logo-bank">
                        <img src={logo} alt="ЛИГА Банк" />
                        <span className="footer__logo-name" >ЛИГА БАНК</span>
                    </Link>
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
        </BrowserRouter>
    );
};

export default Footer;
