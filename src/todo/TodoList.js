import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}></Todo>
      ))
    }
  </ul>
);

export default TodoList;
