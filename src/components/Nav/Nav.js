import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Container } from "reactstrap";
import Button from "../Button/Button";
import { ReactComponent as Icon } from "../../media/Icon.svg";
import "./Nav.css";

const goods = [
  ["pizzas", "Пицца"],
  ["combos", "Комбо"],
  ["snacks", "Закуски"],
  ["desserts", "Десерты"],
  ["drinks", "Напитки"],
  ["other", "Другие товары"],
];

function Nav(props) {
  const [fixed, setFixed] = useState(false);
  let offsets = null;
  useEffect(() => {
    document.addEventListener("scroll", watchScroll);
    return () => {
      document.removeEventListener("scroll", watchScroll);
    };
  });
  function watchScroll(e) {
    const navNodeTop = document.querySelector(".dodo-nav").offsetTop;
    const currentPos = window.scrollY;
    if (currentPos >= navNodeTop) {
      setFixed(true);
    } else if (fixed && currentPos <= navNodeTop) {
      setFixed(false);
    }
    if (!offsets) {
      offsets = goods.map(([id]) => {
        const link = document.querySelector(`a[data-scroll=${id}]`);
        const { offsetTop, clientHeight } = document.querySelector(`#${id}`);
        return [link, offsetTop, clientHeight];
      });
    }
    offsets.forEach(([elem, offsetTop, clientHeight]) => {
      if (currentPos >= offsetTop && currentPos <= offsetTop + clientHeight) {
        elem.setAttribute("data-active", true);
      } else {
        elem.setAttribute("data-active", false);
      }
    });
  }
  return (
    <Container className={`dodo-nav ${fixed ? "fixed" : ""}`} fluid={true}>
      <Container>
        <div className="dodo-row">
          <div
            className="dodo-icon-sticky"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              props.history.push("/");
            }}
          >
            <Icon />
          </div>
          <ul className="nav-links">
            {goods.map(([link, text], index) => (
              <li key={index}>
                <Link
                  data-scroll={link}
                  data-active={`#${link}` === props.location.hash}
                  to={`/#${link}`}
                >
                  {text}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/bonusactions">Акции</Link>
            </li>
            <li>
              <Link>Контакты</Link>
            </li>
            <li>
              <Link>О нас</Link>
            </li>
            <li>
              <Link className="dodo-live">Прямой эфир</Link>
            </li>
          </ul>
          <div className="nav-button">
            <Button
              fsize={16}
              text={"Корзина | 0"}
              backgroundColor={"rgb(255, 105, 0)"}
              color={"white"}
              width={125}
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default withRouter(Nav);
