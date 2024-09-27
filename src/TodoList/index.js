import "./TodoList.css"

function TodoList(props) {
  return(
    <ul className="list px-6" >
        {props.children}
    </ul>
  ) 
}

export {TodoList}