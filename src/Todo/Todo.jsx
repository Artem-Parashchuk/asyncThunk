import { Field, Form, Formik } from "formik";
import s from "./Todo.module.css";
import { TodoList } from "../TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectTodos } from "../redux/todoList/slice";
import {Filter} from '../Filter/Filter'
import { useEffect } from "react";
import { addTodoThunk, fetchTodosThunk } from "../redux/todoList/operations";
import { Loader } from "../Loader/Loader";
export const Todo = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    
  const handleSubmit = (values, options) => {
    dispatch(addTodoThunk({todo: values.todo}));
    options.resetForm();
  };

  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [dispatch])


  return (
    <div className={s.wrapper}> 
       {isLoading && <Loader/>} 
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
