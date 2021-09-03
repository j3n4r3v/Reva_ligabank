import './App.css';
import { Link } from "react-dom";

const App = () => {
  return (
    <div>
    <header className="header">
      <div className="header__logo">
        <svg></svg>
        <Link className="" to=""></Link>
      </div>
      <ul className="navigation">
        <li className="navigation">
          <Link className="navigation" to="#"></Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="#"></Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="#"></Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="#"></Link>
        </li>
        <li className="navigation">
          <Link className="navigation" to="#"></Link>
        </li>
        <li className="navigation">
          <img className="navigation" src="" alt=""/>
          <button className="navigation">
            <span className="navigation"></span>
          </button>
        </li>
      </ul>
    </header>
    <section className="advertisment">
      <div className="advertisment">
        <h1 className="advertisment__title">Лига Банк</h1>
        <p className="advertisment"></p>
        <Link className="advertisment" to=""></Link>
      </div>
      <div className="advertisment">
        <img className="advertisment" src="" alt=""/>
        <img className="advertisment" src="" alt=""/>
      </div>
    </section>
    <section className="history">
      <h2 className="history__title">Конвертер валют</h2>
      <div className="history">
        <span className="history"></span>
        <span className="history"></span>
      </div>
      <input className="history" type="number"></input>
      <select className="history" name="" id=""></select>
      <p className="history"></p>
      <div>
        <input className="history" type="number"></input>
        <select className="history" name="" id=""></select>
      </div>
      <div className="history">
        <input className="history" type="number"></input>
        <button className="history"></button>
      </div>
    </section>
    <section className="history">
      <h3 className="history__title">История конвертации</h3>
      <div className="history">
        <div className="history">
          <span className="history__date"></span>
          <span className="history__have"></span>
          <span className="history__need"></span>
          <button className="history"></button>
        </div>
        <div className="history">
          <span className="history"></span>
          <span className="history"></span>
          <span className="history"></span>
        </div>
      </div>
    </section>
    <footer className="socials">
      <div className="socials">
        <div className="socials">
          <img className="socials" src="" alt=""/>
          <span className="socials"></span>
        </div>
        <p className="socials"></p>
      </div>
      <ul className="socials">
        <li className="socials">
          <Link className="socials" to="">Услуги</Link></li>
        <li className="socials">
          <Link className="socials" to="">Расчитать кредит</Link></li>
        <li className="socials">
          <Link className="socials" to="">Контакты</Link></li>
        <li className="socials">
          <Link className="socials" to="">Задать вопрос</Link></li>
      </ul>
      <div>
        <span className="socials"></span>
        <p className="socials"></p>
      </div>
      <div className="socials">
        <span className="socials"></span>
        <p className="socials"></p>
      </div>
      <ul className="socials">
        <li className="socials">
          <Link className="socials" to=""></Link>
        </li>
        <li className="socials">
          <Link className="socials" to=""></Link>
        </li>
        <li className="socials">
          <Link className="socials" to=""></Link>
        </li>
        <li className="socials">
          <Link className="socials" to=""></Link>
        </li>
      </ul>
    </footer>
  </div>
  );
}

export default App;
