// TodoItem.jsx
import { useDispatch } from "react-redux";
import { FaRegStar } from "react-icons/fa";
import s from "./TodoItem.module.css";
import { likeTodoThunk, toggleTodoThunk, deleteTodoThunk } from "../redux/todoList/operations";

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <li className={s.item}>
                {todo.liked && <FaRegStar color="gold" />}
                <p className={s.text}>{todo.todo}</p>
                <label className="cursor-pointer label">
                    <span className="label-text">Set as completed</span>
                    <input
                        onChange={() => dispatch(toggleTodoThunk(todo.id))}
                        checked={todo.completed}
                        type="checkbox"
                        className="checkbox checkbox-secondary"
                    />
                </label>
                <button
                    className={s.btn}
                    onClick={() => dispatch(deleteTodoThunk(todo.id))}
                >
                    Delete
                </button>
                <button
                    className={s.btn_like}
                    onClick={() => dispatch(likeTodoThunk(todo.id))}
                >
                    Like
                </button>
            </li>
        </div>
    )
}
