import './Input.css';

function Input({ text, type, height, width, refelem }) {
  return (
    <div className="input">
      <label>{text}</label>
      <input ref={refelem} type={type} style={{ height, width }}></input>
    </div>
  );
}

export default Input;
