import { useEffect, useState, Fragment, useRef } from "react";
import { withRouter } from "react-router";
import PizzaSpinner from "../PizzaSpinner/PizzaSpinner";
import OfferItem from "../OfferItem/OfferItem";
import { fetchItems } from "../../api";
import "./Offers.css";

function Offers({ location }) {
  const [data, setData] = useState([]);
  const [err, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const refs = useRef([]);
  const scrollTo = (id) => {
    document.querySelector(`${id}`).scrollIntoView();
  };
  const getItems = async () => {
    try {
      const items = await fetchItems();
      setData(items);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setData([]);
      setTimeout(() => getItems(), 4000);
    }
  };
  useEffect(() => {
    if (!data.length) {
      getItems();
    }
  }, [data]);
  useEffect(() => {
    if (location.hash && data.length) {
      const [nodeElem] = refs.current.filter(
        (e) => `#${e.id}` === location.hash
      );
      requestAnimationFrame(() => {
        nodeElem.scrollIntoView();
      });
    }
  });
  return (
    <div className="offers">
      {err && <div>{`${err} Retrying...`}</div>}
      {isLoading && <PizzaSpinner></PizzaSpinner>}
      {Array.isArray(data) &&
        data.map(({ items, title, id }, index) => {
          return (
            <Fragment key={index}>
              <h2 key={index}>{title}</h2>
              <div
                id={id}
                ref={(elem) => {
                  refs.current[index] = elem;
                }}
                className="offers-content"
              >
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
