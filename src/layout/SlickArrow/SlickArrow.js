import "./SlickArrow.css";
export default function SlickArrow({ className, style, onClick, direction }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        transform: `rotate(${direction === "right" ? "225" : "45"}deg)`,
      }}
      onClick={onClick}
    ></div>
  );
}
