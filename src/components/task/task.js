import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

export default class Task extends Component {
  static defaultProps = {
    classname: 'active',
    onDeleted: () => {},
    onToggleCompleted: () => {},
    completed: false,
  };

  render() {
    const { description, created, classname, onDeleted, onToggleCompleted, completed } = this.props;

    let classNames = classname;

    if (completed) {
      classNames = 'completed';
    }

    if (classname === 'editing') {
      return (
        <li className={classname}>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>
              <span className="description">{description}</span>
              <span className="created">created {formatDistanceToNow(created)} ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
          <input type="text" className="edit" value="Editing task" />
        </li>
      );
    } else {
      return (
        <li className={classNames}>
          <div className="view">
            <input className="toggle" type="checkbox" onClick={onToggleCompleted} />
            <label>
              <span className="description">{description}</span>
              <span className="created">created {formatDistanceToNow(created)} ago</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy" onClick={onDeleted}></button>
          </div>
        </li>
      );
    }
  }
}
