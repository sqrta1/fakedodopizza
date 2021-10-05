import applestore from './applestore.svg';
import googleplay from './googleplay.svg';
import dodopizza from './dodopizza.svg';
import facebook from './facebook.svg';

import './FooterInfo.css';

function FooterInfo() {
  return (
    <div className="footerinfo">
      <div className="footerinfo-links">
        <div>
          <h3>Додо Пицца</h3>
          <a href="">О нас</a>
          <a href="https://book.dodopizza.info/">Додо-книга</a>
          <a href="https://sila-uma.ru/aboutdodo/">Блог «Сила ума»</a>
          <a href="https://dodo.dev/">Додо ИС</a>
        </div>
        <div>
          <h3>Работа</h3>
          <a href="https://rabotavdodo.ru/?utm_source=web">В пицерии</a>
          <a href="https://pyrus.com/form/612739">В контакт-центре</a>
        </div>
        <div>
          <h3>Партнерам</h3>
          <a href="https://dodofranchise.ru/">Франшиза</a>
          <a href="https://dodoinvest.com/">Инвестиции</a>
          <a href="https://bidzaar.com/companies/view/d1827205-1309-4442-8adb-f6887474e684">
            Поставщикам
          </a>
          <a href="https://www.dodoarenda.ru/">Предложить помещение</a>
        </div>
        <div>
          <h3>Это интересно</h3>
          <a href="https://bezperchatok.ru/">Почему мы готовим без перчаток?</a>
          <a href="https://www.dodokids.ru/">Экскурсии и мастер-классы</a>
          <a href="https://b2b.dodopizza.org/">Корпоративные заказы</a>
        </div>
        <div className="footer-links-content">
          <div className="footerinfo-links-download">
            <a href="https://play.google.com/store/apps/details?id=ru.dodopizza.app&referrer=af_tranid%3DYpI21NF_7bBEYdza1sOIYQ%26af_ad%3Dicon%26pid%3Ddodopizza.site%26af_click_lookback%3D7d%26c%3Dweb">
              <img src={googleplay}></img>
            </a>
            <a href="https://apps.apple.com/RU/app/id894649641?mt=8">
              <img className="footerinfo-link-apple" src={applestore}></img>
            </a>
          </div>
          <a className="footerinfo-mail" href="mailto:feedback@dodopizza.com">
            feedback@dodopizza.com
          </a>
        </div>
      </div>
      <div className="footerinfo-about">
        <div>
          <h2>469 573 372 ₽</h2>
          <br />
          <p>Выручка российской сети в этом месяце. В прошлом — 3 057 975 017 ₽</p>
        </div>
        <div>
          <h2>730 пиццерий</h2>
          <br />
          <p>в 15 странах, от Великобритании до Нигерии</p>
        </div>
      </div>
      <hr />
      <div className="footerinfo-end">
        <div className="footerinfo-end-dodopizza">
          <img src={dodopizza}></img>
          <div>
            <p>© 2021</p>
          </div>
        </div>
        <div className="footerinfo-end-practicalinfo">
          <a href="">Правовая информация</a>
          <a href="https://drive.google.com/file/d/1GWaKPdU7t5URgMkh_X4pJqmyZuGr9FdQ/edit">
            Калорийность и состав
          </a>
          <a href="">Помощь</a>
        </div>
        <div className="footerinfo-social">
          <div>
            <a href="https://www.facebook.com/dodopizza">
              <img></img>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/dodopizza/">
              <img></img>
            </a>
          </div>
          <div>
            <a href="https://ok.ru/dodopizza">
              <img></img>
            </a>
          </div>
          <div>
            <a href="https://vk.com/dodo">
              <img></img>
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/c/DodoPizzaRussia">
              <img></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
