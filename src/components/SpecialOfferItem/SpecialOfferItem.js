import './SpecialOfferItem.css';

import dodster from './dodster.jpeg';

function SpeicalOfferItem() {
  return (
    <div className="specialofferitem">
      <img src={dodster}></img>
      <div className="specialofferitem-text">
        <div>Острый додстер</div>
        <div>159Р</div>
      </div>
    </div>
  );
}

export default SpeicalOfferItem;
