import Button from '../Button/Button';

import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
        <a>Пицца</a>
        <a>Комбо</a>
        <a>Закуски</a>
        <a>Десерты</a>
        <a>Напитки</a>
        <a>Другие товары</a>
        <a>Акции</a>
        <a>Контакты</a>
        <a>О нас</a>
        <a>Прямой эфир</a>
      </div>
      <div className="nav-button">
        <Button
          fsize={16}
          text={'Корзина | 0'}
          backgroundColor={'rgb(255, 105, 0)'}
          color={'white'}
        />
      </div>
    </div>
  );
}

export default Nav;
