import Button from '../Button/Button';

import './OfferItem.css';
import pizza from './pizza.jpeg';

function OfferItem() {
  return (
    <div className="offeritem">
      <div className="offeritem-content">
        <img className="offeritem-content-img" src={pizza}></img>
        <h2>Колбаски Барбекю</h2>
        <p>Острая чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус</p>
      </div>
      <div className="offeritem-footer">
        <div className="offeritem-footer-price">от 399Р</div>
        <div className="offeritem-footer-button">
          <Button
            text={'Выбрать'}
            fsize={16}
            backgroundColor={'rgba(255, 105, 0, 0.2)'}
            color={'rgb(255, 105, 0)'}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferItem;
