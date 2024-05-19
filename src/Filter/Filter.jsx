import { useDispatch, useSelector } from "react-redux";
import s from "./Filter.module.css";

import clsx from "clsx";
import { selectFilter, setFilter } from "../redux/filter/slice";


export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.wrapper_btn}>
      <button
        onClick={() => dispatch(setFilter("all"))}
        className={clsx(filter === "all" ? s.btnSuccess : s.btn)}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter("active"))}
        className={clsx(filter === "active" ? s.btnSuccess : s.btn)}
      >
        Active
      </button>
      <button
        onClick={() => dispatch(setFilter("completed"))}
        className={clsx(filter === "completed" ? s.btnSuccess : s.btn)}
      >
        Completed
      </button>
      <button
        onClick={() => dispatch(setFilter("liked"))}
        className={clsx(filter === "liked" ? s.btnSuccess : s.btn)}
      >
        Liked
      </button>
    </div>
  );
};
