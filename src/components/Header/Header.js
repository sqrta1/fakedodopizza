import Button from '../Button/Button';

import './Header.css';
import navimg from './navlogo.png';

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-left-main">
          <img className="header-left-logo" src={navimg}></img>
          <div className="header-left-cityofdelivery">
            <div className="header-left-cityname">
              Доставка пиццы <span>Москва</span>
            </div>
            <div className="header-left-timerating">35 мин - 4.67 h</div>
          </div>
          <div className="header-left-phone">
            <a href="tel:+89991119911">8 999 111-99-11</a>
            <div>Звонок бесплатный</div>
          </div>
        </div>
      </div>
      <div className="header-right">
        <Button text={'Додокоины'} hover={true} width={100} />
        <Button fsize={13} text={'Войти'} hover={true} width={75} />
      </div>
    </div>
  );
}

export default Header;
