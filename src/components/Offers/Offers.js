import OfferItem from '../OfferItem/OfferItem';

import './Offers.css';

function Offers() {
  return (
    <div className="offers">
      <h2>Пицца</h2>
      <div className="offers-content">
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
        <OfferItem />
      </div>
    </div>
  );
}

export default Offers;
