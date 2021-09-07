import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Header = () => {
    return (
        <BrowserRouter>
            <header className="header">
            <div className="header__logo">
                <Link to="/"><img src='./images/logo.png' alt="ЛИГА Банк"></img></Link>
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