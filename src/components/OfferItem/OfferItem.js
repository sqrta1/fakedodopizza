import Button from "../Button/Button";

import "./OfferItem.css";

function OfferItem({ imgUrls, title, description, price }, id) {
  const filteredUrls = imgUrls.filter(([url, w]) => w.replace("w", "") <= 300);
  const imgUrl = !filteredUrls.length
    ? imgUrls[0][0]
    : filteredUrls[filteredUrls.length - 1][0];
  return (
    <div key={id} className="offeritem">
      <div className="offeritem-content">
        <img className="offeritem-content-img" src={imgUrl}></img>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="offeritem-footer">
        <div className="offeritem-footer-price">{`от ${price}Р`}</div>
        <div className="offeritem-footer-button">
          <Button
            text={"Выбрать"}
            fsize={16}
            backgroundColor={"rgba(255, 105, 0, 0.2)"}
            color={"rgb(255, 105, 0)"}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferItem;
