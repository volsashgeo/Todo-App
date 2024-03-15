import React, { Component } from 'react';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onTaskAdded(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onInputChange}
          value={this.state.inputValue}
        />
      </form>
    );
  }
}

// const NewTaskForm  = () => {
//     return (
//         <form>
//             <input className="new-todo"
//                    placeholder="What needs to be done?"
//                    autoFocus
//                    onChange={ this.onInputChange }
//             />

//         </form>
//     );
// };

// export default NewTaskForm ;
