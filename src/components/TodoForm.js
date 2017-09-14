import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCurrent, saveTodo } from '../reducers/todo';

class TodoForm extends Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.updateCurrent(value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveTodo(this.props.currentTodo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.currentTodo}
          onChange={this.handleInputChange}
          autoFocus
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTodo: state.currentTodo,
});

const mapDispatchToProps = { updateCurrent, saveTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
