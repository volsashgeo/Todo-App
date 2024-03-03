import React, { Component } from "react";
import "./task.css";

export default class Task extends Component {

  state = {
    completed: false
  };

  onTaskClick = () => {
    this.setState(({completed}) => {
      return {
        completed: !completed
      }
    });
  };

  render() {
    const { description, created, classname, onDeleted } = this.props;

    const { completed } = this.state;

    let classNames = { classname };

    if(completed) {
      classNames = 'completed';
    }

    if (classname === "editing") {
      return (
        <li className={ classname }>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">
                { description }
              </span>
              <span className="created">{ created }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button
              className="icon icon-destroy"
            ></button>
          </div>
          <input type="text" className="edit" value="Editing task" />
        </li>
      );
    } else {
      return (
        <li className={ classNames }>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span
              className="description"
              onClick = { this.onTaskClick }>{ description }</span>
              <span className="created">{ created }</span>
            </label>
            <button className="icon icon-edit"></button>
            <button
              className="icon icon-destroy"
              onClick = { onDeleted }>
            </button>
          </div>
        </li>
      );
    }
  }
}
