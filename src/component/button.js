
export default function Button({ text, size, className, color1 }) {
  const style = {
    backgroundColor: color1,
    borderRadius: "50px",
    borderStyle: "none",
    width: size && size === "large" ? "12rem" : "7rem",
    height: size && size === "large" ? "3rem" : "2.5rem",
    // padding: size && size == "large" ? "5rem 3rem" : "1rem 1rem",
    color: "white",
  };

  return (
    <>
      <button
        style={style}
        size={size}
        className={className}
        color1={color1}
      >
        {text}
      </button>
    </>
  );
}
