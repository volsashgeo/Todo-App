import React, { Component } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import './app.css'

import TaskList from "../task-list";
import Footer from "../footer";
import NewTaskForm from "../new-task-form";

export default class App extends Component {

    state = {
        todoData: [
            {
              description: "Completed task",
              created: formatDistanceToNow(new Date()),
              classname: "completed",
              id: 1,
            },
            {
              description: "Editing task",
              created: formatDistanceToNow(new Date()),
              classname: "editing",
              id: 2,
            },
            {
              description: "Active task",
              created: formatDistanceToNow(new Date()),
              classname: "active",
              id: 3,
            },
        ]
    }

    deleteTask = (id) => {
        this.setState(({todoData}) => {

            const index = todoData.findIndex((el) => el.id === id);

            const newArr = [ ...todoData.slice(0, index), ...todoData.slice(index + 1)]

            return {
                todoData: newArr
            }
        })
    }

    render() {
        return (
            <section className = "todoapp">
              <header className = "header">
                <h1>todos</h1>
                <NewTaskForm />
              </header>
              <section className="main">
                <TaskList
                todos = { this.state.todoData }
                onDeleted = { this.deleteTask }/>
                <Footer />
              </section>
            </section>
          );
    }

}