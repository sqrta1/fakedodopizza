import './Button.css';

function Button({ text, backgroundColor, color, fsize, mr, padding }) {
  return (
    <button
      style={{
        backgroundColor: `${backgroundColor}`,
        marginRight: `${mr}px`,
      }}>
      <span
        style={{
          color: `${color}`,
          fontSize: `${fsize}px`,
        }}>
        {text}
      </span>
    </button>
  );
}

export default Button;
