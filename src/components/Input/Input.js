import "./Input.css";

function Input({ text, type, height, width, refelem, onChange, placeholder }) {
  return (
    <div className="input">
      <label>{text}</label>
      <input
        ref={refelem}
        type={type}
        style={{ height, width }}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default Input;
