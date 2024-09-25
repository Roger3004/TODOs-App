import "./TodoCounter.css";
function TodoCounter({completed, total}) {
  return (
    <>
      {completed === total 
      ? ( <h1 className="header"> ¡Felicidades! Has completado todos tus TODOs </h1>) 
      : ( <h1 className="header"> Has completado {completed} de {total} TODOs </h1>)}
    </>
  );
}

export { TodoCounter };
