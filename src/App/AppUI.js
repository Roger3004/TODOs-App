import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoAggButton } from "../TodoAggButton/index.js.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";

function AppUI(
    {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        filteredTodos,
        completeTodo,
        deleteTodo,
    }
) {
  return (
    <>
      <div className="form-container">
        <div className="form">
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {filteredTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <TodoAggButton />
        </div>
      </div>
    </>
  );
}

export { AppUI };