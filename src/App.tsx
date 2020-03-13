import * as React from 'react';
import Todo from './todo/Todo';

// interface IProps {
//   todo: Todo;
//   deleteTodo: (todo: Todo) => void;
//   key?: any
// }
export default class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Todo />
      </div>
    );
  }
};

