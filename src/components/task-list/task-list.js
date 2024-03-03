import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos, onDeleted }) => {
  const elems = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task {...itemProps} key={item.id}
            onDeleted={() => onDeleted(id)} />
    );
  });

  return <ul className="todo-list">{elems}</ul>;
};

export default TaskList;
