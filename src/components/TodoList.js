import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({ name, isComplete }) => (
  <li>
    <input
      type="checkbox"
      defaultChecked={isComplete}
    />
    {name}
  </li>
)

const TodoList = (props) => (
  <div className="Todo-List">
    <ul>
      {props.todos.map((todo => (
        <TodoItem key={todo.id} {...todo} />
      )))}
    </ul>
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
