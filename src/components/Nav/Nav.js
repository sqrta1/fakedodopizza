import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import './Nav.css';

function Nav() {
  return (
    <div className="nav">
      <div className="nav-links">
        <a href="#pizzas">Пицца</a>
        <a href="#combos">Комбо</a>
        <a href="#snacks">Закуски</a>
        <a href="#desserts">Десерты</a>
        <a href="#drinks">Напитки</a>
        <a href="#other">Другие товары</a>
        <Link to="/bonusactions">Акции</Link>
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
          width={125}
        />
      </div>
    </div>
  );
}

export default Nav;
