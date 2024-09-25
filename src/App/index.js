import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";
import { AppUI } from "./AppUI.js";
import "./App.css";

/*
const defaultTodos = [
  { text: "Hacer la tarea de Ingles", completed: false },
  { text: "Pasear al perro", completed: false },
  { text: "Visitar a la novia", completed: false },
  { text: "Hacer la tarea de Matematicas", completed: false},
  { text: "Hacer la tarea de Fisica", completed: false},
]; 

localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
*/

function App(
) {
  
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;  

  const filteredTodos = todos.filter((todo) => {
      const textTodo = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return textTodo.includes(searchText);
  });



  const completeTodo = (text) => {
    const newTodos = [...todos];  
    const todoIndex = newTodos.findIndex((todo) => todo.text === text); 
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];  
    const todoIndex = newTodos.findIndex((todo) => todo.text === text); 
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
