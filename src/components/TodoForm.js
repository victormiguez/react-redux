import React from 'react';
import { connect } from 'react-redux';

import { updateCurrent } from '../reducers/todo';

const TodoForm = ({ currentTodo, updateCurrent }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    updateCurrent(value);
  }

  return (
    <form>
      <input
        type="text"
        value={currentTodo}
        onChange={handleInputChange}
        autoFocus
      />
    </form>
  );
}

const mapStateToProps = (state) => ({
  currentTodo: state.currentTodo,
});

const mapDispatchToProps = { updateCurrent };

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
