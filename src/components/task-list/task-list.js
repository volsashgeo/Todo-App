import React from "react";
import Task from "../task";
import "./task-list.css";

const TaskList = ({ todos, filter, onDeleted, onToggleCompleted }) => {
  let elems;

  const taskTemplate = () => {
    return (elems = todos.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <Task
          {...itemProps}
          key={item.id}
          onDeleted={() => onDeleted(id)}
          onToggleCompleted={() => onToggleCompleted(id)}
        />
      );
    }));
  };

  if (filter === "all") {
    taskTemplate();
  }

  if (filter === "active") {
    todos = todos.filter((el) => !el.completed);

    taskTemplate();
  }

  if (filter === "completed") {
    todos = todos.filter((el) => el.completed);

    taskTemplate();
  }

  return <ul className="todo-list">{ elems }</ul>;
};

export default TaskList;
