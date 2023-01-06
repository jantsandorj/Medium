export default function Button({ text, size, className }) {
  const style = {
    backgroundColor: "black",
    borderRadius: "50px",
    border: "1px black solid",
    width: size && size == "large" ? "12rem" : "7rem",
    height: size && size == "large" ? "3rem" : "2.5rem",
    // padding: size && size == "large" ? "5rem 3rem" : "1rem 1rem",
    color: "white"
  };
  return (
    <button style={style} size={size} className={className}>
      {text}
    </button>
  );
}
