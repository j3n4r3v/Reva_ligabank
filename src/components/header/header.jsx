import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import logo from "../../images/logo.svg"

const Header = () => {
    return (
        <BrowserRouter>
            <header className="header">
            <div className="header__logo">
                    <Link to="/" className="header__logo-bank">
                        <img src={logo} alt="ЛИГА Банк" />
                        <span className="header__logo-name" >ЛИГА БАНК</span>
                    </Link>
            </div>
            <ul className="header__menu">
                <li><Link className="header__link" to="/">Услуги</Link></li>
                <li><Link className="header__link" to="/">Рассчитать кредит</Link></li>
                <li><Link className="header__link header__link--active" to="/">Конвертер валют</Link></li>
                <li><Link className="header__link" to="/">Контакты</Link></li>
                <li><Link className="header__link" to="/">Задать вопрос</Link></li>
            </ul>
            <div className="header__login">
                <Link className="header__link header__link--login" to="/">Войти в Интернет-банк</Link>
            </div>
            </header>
        </BrowserRouter>
    );
};

export default Header;