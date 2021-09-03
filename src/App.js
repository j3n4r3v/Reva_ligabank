import './App.css';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
    <header className="header">
      {/* <div className="container"> */}
        <div>
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
              <img className="navigation" src="" alt=""></img>
              <button className="navigation">
                <span className="navigation"></span>
              </button>
          </li>
        </ul>
      {/* </div> */}
    </header>
      <section className="advertisment">
        <div className="advertisment">
          <h1 className="advertisment">Лига Банк</h1>
          <p className="advertisment"></p>
          <Link className="advertisment" href=""></Link>
  </div>
        <div className="advertisment">
          <img className="advertisment" src="" alt=""></img>
          <img className="advertisment" src="" alt=""></img>
      </div>
      </section>
      <section className="history">
        <h3 className="history">Конвертер валют</h3>
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
        <h4 className="history">История конвертации</h4>
        <div className="history">
          <div className="history">
            <span className="history"></span>
            <span className="history"></span>
            <span className="history"></span>
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
            <img className="socials" src="" alt=""></img>
            <span className="socials"></span>
          </div>
          <p className="socials"></p>
        </div>
        <ul className="socials">
          <li className="socials">
            <Link className="socials" href="">Услуги</Link></li>
          <li className="socials">
            <Link className="socials" href="">Расчитать кредит</Link></li>
          <li className="socials">
            <Link className="socials" href="">Контакты</Link></li>
          <li className="socials">
            <Link className="socials" href="">Задать вопрос</Link></li>
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
            <Link className="socials" href=""></Link></li>
          <li className="socials">
            <Link className="socials" href=""></Link></li>
          <li className="socials">
            <Link className="socials" href=""></Link></li>
          <li className="socials">
            <Link className="socials" href=""></Link></li>
        </ul>
      </footer>
    </div>
    

    
  );
}

export default App;
