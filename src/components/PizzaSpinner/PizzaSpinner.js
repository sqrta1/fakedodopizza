import react from "react";
import "./PizzaSpinner.css";
import Spinner from "./spinner.jpeg";

const PizzaSpinner = () => {
  return (
    <div className="spinner-wrapper">
      <div className="spinner-content">
        <div>
          <img src={Spinner} height={70}></img>
        </div>
      </div>
    </div>
  );
};
export default PizzaSpinner;
