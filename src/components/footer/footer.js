import React from "react";
import TasksFilter from "../tasks-filter";
import './footer.css';


const Footer = ({ todoLeft, onClickFilters, onClickClearCompleted }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoLeft} items left</span>
      < TasksFilter onClickFilters = { (event) => onClickFilters(event)}
      />
      <button className="clear-completed"
              onClick = { onClickClearCompleted }
      >Clear completed</button>
    </footer>
  );
};

export default Footer;
