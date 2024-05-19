import s from "./TodoList.module.css";

import { useSelector } from "react-redux";
import { selectFilter } from "../redux/filter/slice";
import { TodoItem } from "../TodoItem/TodoItem";


export const TodoList = ({todos}) => {
    const filterTodo = useSelector(selectFilter);

    const getFillteredData = () => {
      switch (filterTodo) {
        case "all":
          return todos
  
          case 'active':
            return todos.filter(item => item.completed)
  
          case 'completed':
            return todos.filter(item => item.completed)
  
          case 'like':
            return todos.filter(item => item.liked)
  
            default:
              return todos
      }
    };
  const filteredData = getFillteredData()
    return (
      <div>
        <ul className={s.list}>
          {filteredData.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            );
          })}
        </ul>
      </div>
  )
}
