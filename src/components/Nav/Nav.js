import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Nav.css";
import { Container, Col, Row } from "reactstrap";

function Nav() {
  return (
    <Container className="dodo-nav" fluid={true}>
      <Col xl={{ size: 8, offset: 2 }} className='dodo-row'>
        <div className="nav-links">
          <Link to="/#pizzas">Пицца</Link>
          <Link to="/#combos">Комбо</Link>
          <Link to="/#snacks">Закуски</Link>
          <Link to="/#desserts">Десерты</Link>
          <Link to="/#drinks">Напитки</Link>
          <Link to="/#other">Другие товары</Link>
          <Link to="/bonusactions">Акции</Link>
          <Link>Контакты</Link>
          <Link>О нас</Link>
          <Link>Прямой эфир</Link>
        </div>
        <div className="nav-button">
          <Button
            fsize={16}
            text={"Корзина | 0"}
            backgroundColor={"rgb(255, 105, 0)"}
            color={"white"}
            width={125}
          />
        </div>
      </Col>
    </Container>
  );
}

export default Nav;
