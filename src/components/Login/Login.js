import { Children, useEffect, useRef, useState } from "react";
import { Redirect, useHistory } from "react-router";
import ReactDOM from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { emailRegExp } from "../../utils/regexps";

import getOTP from "../../Mocks/OTP";

import "./Login.css";

function Login({ close }) {
  const [email, setEmail] = useState("");
  const emailElem = useRef("");
  const codeElem = useRef("");
  const history = useHistory();
  const isLogged = localStorage.getItem("otpPass");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [otpPassFirstReqestDone, setOtpPassFirstReqestDone] = useState(null);

  const handleChange = (e) => {
    const isValid = emailRegExp.test(e.target.value);
    if (isValid) {
      setDisabled(false);
      setEmail(e.target.value);
    } else {
      setDisabled(true);
    }
  };

  const handleEmailDispatch = async (e) => {
    const emailValue = emailElem.current.value;
    try {
      const { status } = await fetch("api/auth", {
        method: "POST",
        body: JSON.stringify({ email: emailValue }),
      }).then((r) => r.json());
      if (status === "ok") {
        setOtpPassFirstReqestDone(true);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const handleCodeDispatch = async () => {
    const codeValue = codeElem.current.value;
    const emailValue = email;
    try {
      const { status, jwt } = await fetch("api/auth", {
        method: "patch",
        body: JSON.stringify({ code: codeValue, email: emailValue }),
      }).then((r) => r.json());
      if (status === "ok") {
        localStorage.setItem("jwt", jwt);
        close();
        history.push("profile");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otpPassFirstReqestDone) {
      handleEmailDispatch();
    } else {
      handleCodeDispatch();
    }
  };

  return (
    <div className="login">
      <div className="login-block">
        <h2>Вход на сайт</h2>
        <p>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях asd@asd.we
        </p>
        <form>
          {!otpPassFirstReqestDone && (
            <Input
              placeholder="example@mail.ru"
              refelem={emailElem}
              text={"Ваш email"}
              type="email"
              height="50px"
              width="100%"
              onChange={handleChange}
            />
          )}
          {otpPassFirstReqestDone && (
            <Input
              refelem={codeElem}
              text="Введите код(он в консоли)"
              type="email"
              height="50px"
              width="100%"
            />
          )}
          <Button
            disabled={disabled}
            onClick={handleSubmit}
            text={!otpPassFirstReqestDone ? "Выслать код" : "Ввести код"}
            backgroundColor="rgb(255, 105, 0);"
            color="white"
          />
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default Login;
