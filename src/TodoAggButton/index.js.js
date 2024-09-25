import "./TodoAggButton.css";

function TodoAggButton() {
  return (
    <button
      className="button"
      onClick={() => {
        console.log("le diste click");
      }}
    >
      + Agregar Tarea
    </button>
  );
}
export { TodoAggButton };
