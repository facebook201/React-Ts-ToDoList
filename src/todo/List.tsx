import * as React from 'react';
import { Button } from 'antd'

import { Todo } from './model';

interface IProps {
  todo: Todo;
  key?: any,
  deleteTodo: (id: string) => void;
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

  render() {
    const { todo } = this.props;
    return (
      <li>
        <span className="list-text"> { todo.text } </span>
        <span className="list-text"> { todo.completed ? '完成' : '未完成' } </span>
        <Button type="primary" onClick={() => this.onDeleteTodo(todo.id)}>删除</Button>
      </li>
    );
  }
}

export default List;
