import * as React from 'react';
import { Button } from 'antd'

interface IProps {
  filterList: (status: boolean | string) => void;
}

class TodoStatus extends React.Component<IProps> {

  handleClick = (status: boolean | string) => {
    this.props.filterList(status);
  }

  render() {
    return (
      <div className="todo-status">
        <Button className="status-btn" type="primary" onClick={() => this.handleClick('all')}>全部</Button>
        <Button className="status-btn" type="primary" onClick={() => this.handleClick(true)}>已完成</Button>
        <Button className="status-btn" type="primary" onClick={() => this.handleClick(false)}>未完成</Button>
      </div>
    )
  }
};

export default TodoStatus;
