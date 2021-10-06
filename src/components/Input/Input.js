import './Input.css';

function Input({ text }) {
  return (
    <div className="input">
      <label>{text}</label>
      <input type="text"></input>
    </div>
  );
}

export default Input;
