//Перенести в header

import './Login.css';

import { useRef } from 'react';
import { Redirect, useHistory } from 'react-router';

import getOTP from '../../Mocks/OTP';

import './Login.css';

function Login() {
  const email = useRef('');
  const password = useRef('');
  const history = useHistory();
  const isLogged = localStorage.getItem('otpPass');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const otpPass = getOTP(emailValue, passwordValue);
    if (!otpPass) {
      alert('Логин или пароль не совпадает.');
      return;
    }
    console.log(otpPass);
    const userPrompt = prompt('Введите пароль из SMS-сообщения');
    if (userPrompt === otpPass) {
      localStorage.setItem('otpPass', otpPass);
      history.push('/main');
    } else {
      alert('Вы ввели неправильный пароль! Повторите еще раз.');
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
    <div className="login">
      <div className="login-block">
        <form></form>
      </div>
    </div>
  );
}

export default Login;
