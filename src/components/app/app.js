import React, { Component } from 'react';
import './app.css';

import TaskList from '../task-list';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';

export default class App extends Component {
  maxId = 1;

  state = {
    todoData: [
      this.createTodoTask('Completed task', new Date('2024-03-05T13:24:00')),
      this.createTodoTask('Editing task', new Date('2024-03-05T13:24:00')),
      this.createTodoTask('Active task', new Date('2024-03-05T13:24:00')),
    ],
    filter: 'all',
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const newArr = [...todoData.slice(0, index), ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[index];

      const newItem = { ...oldItem, completed: !oldItem.completed };

      const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];

      return {
        todoData: newArr,
      };
    });
  };

  addTask = (description) => {
    const newItem = this.createTodoTask(description, Date.now());

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  onClickFilters = (event) => {
    this.setState(() => {
      const filterValue = event.target.innerText.toLowerCase();
      const filtersList = document.querySelector('.filters');
      const filterItems = filtersList.querySelectorAll('button');

      for (const filter of filterItems) {
        filter.classList.remove('selected');
      }
      event.target.classList.add('selected');

      return {
        filter: filterValue,
      };
    });
  };

  onClickClearCompleted = () => {
    const idCompletedArr = [];

    this.state.todoData.forEach((item) => {
      if (item.completed === true) {
        idCompletedArr.push(item.id);
      }
    });

    for (const id of idCompletedArr) {
      this.deleteTask(id);
    }
  };

  createTodoTask(description, created) {
    return {
      description,
      created,
      classname: 'active',
      completed: false,
      id: this.maxId++,
    };
  }

  render() {
    const { todoData, filter } = this.state;
    const todoLeftCount = todoData.filter((el) => !el.completed).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onTaskAdded={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todos={todoData}
            filter={filter}
            onDeleted={this.deleteTask}
            onToggleCompleted={this.onToggleCompleted}
          />
          <Footer
            todoLeft={todoLeftCount}
            onClickFilters={this.onClickFilters}
            onClickClearCompleted={this.onClickClearCompleted}
          />
        </section>
      </section>
    );
  }
}
