import { useRef } from 'react';
import { useHistory } from 'react-router';

import Input from '../Input/Input';
import Button from '../Button/Button';

import getOTP from '../../Mocks/OTP';

import './Login.css';

function Login() {
  const email = useRef('');
  const history = useHistory();
  const isLogged = localStorage.getItem('otpPass');

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const otpPass = getOTP(emailValue);
    if (!otpPass) {
      alert('Логин или пароль не совпадает.');
      return;
    }
    console.log(otpPass);
    const userPrompt = prompt('Введите пароль из SMS-сообщения');
    if (userPrompt === otpPass) {
      localStorage.setItem('otpPass', otpPass);
      history.push('/profile');
    } else {
      alert('Вы ввели неправильный пароль! Повторите еще раз.');
    }
  };

  return (
    <div className="login">
      <div className="login-block">
        <h2>Вход на сайт</h2>
        <p>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
        <form>
          <Input refelem={email} text="Ваш email" type="email" height="50px" width="100%" />
          <Button
            onClick={handleLogin}
            text="Выслать код"
            backgroundColor="rgb(255, 105, 0);"
            color="white"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
