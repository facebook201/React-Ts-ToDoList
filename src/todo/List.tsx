import * as React from 'react';
import { Button, Checkbox } from 'antd'
import { Todo } from './model';

interface IProps {
  todo: Todo;
  key?: any,
  id: string,
  deleteTodo: (id: string) => void;
  todoChange: (id: string, checked: boolean) => void;
}

interface IState {}

class List extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
  }

  onDeleteTodo = (id: string) => {
    if (id) {
      this.props.deleteTodo(id);
    }
  };

  handleChange = (e: any) => {
    let checked = e.target.checked;
    let id = this.props.id;
    this.props.todoChange(id, checked);
  };

  render() {
    const { todo } = this.props;
    const className = todo.completed ? 'list-text completed-text' : 'list-text';
    return (
      <li className="todo-list">
        <Checkbox checked={todo.completed} onChange={this.handleChange}></Checkbox>
        <span className={className}> { todo.text } </span>
        <span className={className}> { todo.completed ? '完成' : '未完成' } </span>
        <Button className="todo-btn" type="primary" onClick={() => this.onDeleteTodo(todo.id)}>删除</Button>
      </li>
    );
  }
}

export default List;
