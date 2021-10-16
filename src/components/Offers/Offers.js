import { useEffect, useState, Fragment } from "react";
import { withRouter } from "react-router";
import PizzaSpinner from "../PizzaSpinner/PizzaSpinner";
import OfferItem from "../OfferItem/OfferItem";
import { fetchItems } from "../../api";
import "./Offers.css";

function Offers({ location }) {
  const [data, setData] = useState([]);
  const [err, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const scrollTo = (id) => {
    document.querySelector(`${id}`).scrollIntoView();
  };
  const getItems = async () => {
    try {
      const items = await fetchItems();
      console.log(items);
      setData(items);
      setLoading(false);
      setError(null);
      if (location.hash) {
        scrollTo(location.hash);
      }
    } catch (error) {
      setError(error.message);
      setData([]);
      setTimeout(() => getItems(), 4000);
    }
  };
  useEffect(() => {
    if (!data.length) {
      getItems();
    } else {
      scrollTo(location.hash);
    }
  }, [location.hash]);
  return (
    <div className="offers">
      {err && <div>{`${err} Retrying...`}</div>}
      {isLoading && <PizzaSpinner></PizzaSpinner>}
      {Array.isArray(data) &&
        data.map(({ items, title, id }, index) => {
          return (
            <Fragment key={index}>
              <h2 key={index}>{title}</h2>
              <div id={id} className="offers-content">
                {id === "ss" && <OfferItem></OfferItem>}
                {items.map((item, ind) => (
                  <OfferItem key={ind} {...item} />
                ))}
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}

export default withRouter(Offers);
