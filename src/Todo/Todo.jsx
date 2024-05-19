import { Field, Form, Formik } from "formik";
import s from "./Todo.module.css";
import { TodoList } from "../TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, selectTodos } from "../redux/todoList/slice";
import {Filter} from '../Filter/Filter'
import { useEffect } from "react";
import { fetchTodosThunk } from "../redux/todoList/operations";
export const Todo = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addTodo(values.todo));
    options.resetForm();
  };

  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [dispatch])


  return (
    <div> 
      <Formik
        initialValues={{ todo: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            name="todo"
            type="text"
            className={s.input}
          />
          <button
            className={s.btn}
            type="submit"
          >
            Add todo
          </button>
        </Form>
      </Formik>
      <Filter />
      <TodoList todos={todos}/>
    </div>
  );
};
