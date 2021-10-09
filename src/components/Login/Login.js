//Перенести в header

import "./Login.css";
import { Children, useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router";
import getOTP from "../../Mocks/OTP";
import ReactDOM from "react-dom";

function Login({ closeModalhandler }) {
  const email = useRef("");
  const password = useRef("");
  const history = useHistory();
  const isLogged = localStorage.getItem("otpPass");
  console.log(closeModalhandler);

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const otpPass = getOTP(emailValue, passwordValue);
    if (!otpPass) {
      alert("Логин или пароль не совпадает.");
      return;
    }
    console.log(otpPass);
    const userPrompt = prompt("Введите пароль из SMS-сообщения");
    if (userPrompt === otpPass) {
      localStorage.setItem("otpPass", otpPass);
      history.push("/main");
    } else {
      alert("Вы ввели неправильный пароль! Повторите еще раз.");
    }
  };

  // return isLogged ? (
  //   <Redirect to="/profile" />
  // ) : (
  //   <div className="login">
  //     <div className="login-block">
  //       <form></form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="login-background" onClick={closeModalhandler}>
      <div className="login">
        <CloseBtn closeModalhandler={closeModalhandler}></CloseBtn>
        <div className="login-block">
          <form></form>
        </div>
      </div>
    </div>
  );
}

const CloseBtn = ({ closeModalhandler }) => {
  return (
    <i className="login-closeBtn" onClick={closeModalhandler}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
          fill="white"
        ></path>
      </svg>
    </i>
  );
};

export const LoginModal = ({ closeModalhandler }) => {
  const NodeEl = document.createElement("div");
  NodeEl.setAttribute("id", "login");
  const el =
    document.getElementById("login") || document.body.appendChild(NodeEl);
  return ReactDOM.createPortal(
    <Login closeModalhandler={closeModalhandler}></Login>,
    el
  );
};

export default Login;