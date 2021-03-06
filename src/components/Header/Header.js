import Button from "../Button/Button";
import { Container, Row, Col } from "reactstrap";
import "./Header.css";
import Logo from "../../media/Logo.svg";
import { useState } from "react";
import { withRouter } from "react-router";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";
import UserIcon from "../../layout/UserIcon/UserIcon";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Header({ setAuthorized, isAuthorized }) {
  const [isModal, setModal] = useState(false);
  const toogleModal = () => {
    setModal(!isModal);
  };

  return (
    <Container id="header">
      <div className="header">
        <div className="header-left">
          <div className="header-left-main">
            <Link to="/">
              <img className="header-left-logo" src={Logo}></img>
            </Link>
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
          <Button text={"Додокоины"} hover={true} width={100} />
          {!isAuthorized && (
            <Button
              fsize={13}
              text={"Войти"}
              hover={true}
              width={75}
              onClick={toogleModal}
            />
          )}
          {isAuthorized && <UserIcon to="profile" />}
          {isModal && (
            <Modal close={toogleModal}>
              <Login close={toogleModal} setAuthorized={setAuthorized}></Login>
            </Modal>
          )}
        </div>
      </div>
    </Container>
  );
}

export default withRouter(Header);
