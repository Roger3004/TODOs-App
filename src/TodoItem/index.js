import "./TodoItem.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className="items">
      <span 
        className={`icon icon_check ${completed ? "icon_check_active": ""}`}
        onClick={onComplete}
        >
      <FaCheck />
      </span>
      <p className={`todo-item ${completed ? "todo-item-complete" : ""}`}>{text}</p>
      <span 
        className="icon delete_item"
        onClick={onDelete}
      >
        <MdOutlineDeleteOutline size={22} />
      </span>
    </li>
  );
}

export { TodoItem };
