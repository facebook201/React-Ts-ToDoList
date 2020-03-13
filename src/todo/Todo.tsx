import * as React from 'react';
import List from './List';
import Header from './Header';
import { Todo } from './model';

function randomCode() {
  return Math.random().toString(36).substr(2,10);
}

const codes: string[] = [];

interface MainProps {}

interface MainState {
  todos: Todo[],

};

export default class TodoList extends React.Component<MainProps, MainState> {
  state: MainState = {
    todos: []
  };

  addTodo = (text: string) => {
    console.log(12123);
    // 先随机一个id
    let code = randomCode();
    let falg = true;

    while(falg) {
      // 如果存在就推入数组
      if (codes.indexOf(code) < 0) {
        codes.push(code);
        const lists = this.state.todos;
        lists.push({
          id: code,
          text: text,
          completed: false
        });
        this.setState({
          todos: lists
        })
        falg = false;
      }
    }
    console.log(this.state.todos);
  };

  deleteTodo = (id: string) => {
    console.log(id);
    if (id) {
      let index = this.state.todos.findIndex(todo => todo.id === id);
      let codeIndex = codes.findIndex(code => code === id);
      if (index > -1) {
        this.state.todos.splice(index, 1);
        codes.splice(codeIndex, 1);
      }
    }
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <ul>
          {todos.map(todo =>
              <List
                key={todo.id}
                todo={todo}
                deleteTodo={this.deleteTodo}
              />
          )}
        </ul>
      </div>
    );
  }
};