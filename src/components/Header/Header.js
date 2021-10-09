import Button from "../Button/Button";

import "./Header.css";
import navimg from "./navlogo.png";
import { LoginModal } from "../Login/Login";
import { useState } from "react/cjs/react.development";

function Header() {
  const [isModal, toogleModal] = useState(false);
  const handleLogin = () => {
    document.body.classList.add("modal-login");
    toogleModal(true);
  };
  const closeModal = () => {
    console.log('call')
    document.body.classList.remove("modal-login");
    toogleModal(false);
  };
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
        <Button text={"Додокоины"} hover={true} width={100} />
        <Button
          fsize={13}
          text={"Войти"}
          hover={true}
          width={75}
          onClick={handleLogin}
        />
        {isModal && (
          <LoginModal closeModalhandler={closeModal}></LoginModal>
        )}
      </div>
    </div>
  );
}

export default Header;
