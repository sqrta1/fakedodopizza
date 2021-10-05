import Button from '../Button/Button';

import dodomania from './dodomania.jpeg';
import './BonusActionsItem.css';

function BonusActionsItem() {
  return (
    <div className="bonusactionsitem">
      <div className="bonusactionsitem-content">
        <img src={dodomania}></img>

        <h2>Додомания на старте!</h2>
        <p>
          Если вы читаете этот текст, значит подарок уже у вас в кармане. Заказывайте в приложении
          продукты со значком Додомания и получайте гарантированные подарки. Играйте в суперигру в
          мобильном приложении и выигрывайте главные призы каждую неделю. Вот это везение!
        </p>
      </div>
      <div className="bonusactionsitem-button">
        <Button
          text={'Посмотреть'}
          fsize={13}
          width={100}
          margin={'5px 5px 5px 0px'}
          color={'rgba(255, 105, 0, 0.9)'}
          backgroundColor={'rgba(255, 105, 0, 0.2)'}
        />
      </div>
    </div>
  );
}

export default BonusActionsItem;
