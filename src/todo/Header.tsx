import * as React from 'react';
import { Input, Button } from 'antd';

interface HeaderProps {
  addTodo: (text: string) => any;
  placeholder: string;
};

class Header extends React.Component<HeaderProps> {
  state = {
    text: ''
  };

  onInputChange = (e: any) => {
    this.setState({ text: e.target.value });
  }
  
  saveTodo = () => {
    const { text } = this.state;
    this.props.addTodo(text);
  }

  render() {
    return (
      <header className="header">
        <h1>Todo List</h1>
        <div style={{ width: '200px', display: 'inline-block', marginRight: '20px' }}>
          <Input
            value={this.state.text}
            placeholder={this.props.placeholder}
            onPressEnter={this.saveTodo}
            onChange={this.onInputChange}
          />
        </div>
        <Button type="primary" onClick={this.saveTodo}>添加</Button>
      </header>
    );
  }
}

export default Header;
