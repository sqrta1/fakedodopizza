import './NavBar.css';
import navimg from './navlogo.png';
function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src={navimg}></img>
        <div className="navbar-cityinfo">
          Доставка пиццы <span>Москва</span>
          <br /> 35 мин - 4.67 h{' '}
        </div>
      </div>
      <div className="navbar-middle">
        <a href="tel:+89991119911">8 999 111-99-11</a>
        <span>Звонок бесплатный</span>
      </div>
      <div className="navbar-right">Додокоины Мои акции Алексей</div>
    </div>
  );
}

export default NavBar;
