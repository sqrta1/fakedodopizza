import Button from '../Button/Button';

import anonymous from './anonymous.svg';
import './SecretBuyer.css';

function SecretBuyer() {
  return (
    <div className="secretbuyer">
      <div className="secretbuyer-content">
        <img src={anonymous}></img>
        <h2>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</h2>
      </div>
      <div>
        <Button
          text={'Заполнить анкету'}
          fsize={16}
          backgroundColor={'rgb(255, 240, 230)'}
          color={'rgb(209, 87, 0)'}
          width={200}
        />
      </div>
    </div>
  );
}

export default SecretBuyer;
