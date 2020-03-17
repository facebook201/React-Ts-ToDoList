import * as React from 'react';
import List from './List';
import Header from './Header';
import TodoStatus from './TodoStatus';
import store from '../store/index';

import { Todo } from './model';

function randomCode() {
  return Math.random().toString(36).substr(2,10);
}

const codes: string[] = [];

interface MainProps {}

interface MainState {
  inputValue: string;
  list: Todo[];
};

export default class TodoList extends React.Component<MainProps, MainState> {
  constructor(props: any) {
    super(props);
    this.state = store.getState();
  }

  addTodo = (text: string) => {
    // 先随机一个id
    let falg = true;
    while(falg) {
      let code = randomCode();
      // 如果存在就推入数组
      if (codes.indexOf(code) < 0) {
        codes.push(code);
        const lists = this.state.list;
        let item = { id: code, text: text, completed: false };
        lists.push(item);
        this.setState({
          list: lists,
        });
        falg = false;
      }
    }
  };

  todoChange = (id: string, checked: boolean) => {
    let index = this.state.list.findIndex(todo => todo.id === id);
    if (index > -1) {
      let todos = this.state.list;
      todos[index].completed = checked
      this.setState({
        list: todos
      });
    }
  }

  deleteTodo = (id: string) => {
    if (id) {
      let index = this.state.list.findIndex(todo => todo.id === id);
      let codeIndex = codes.findIndex(code => code === id);
      if (index > -1) {
        this.state.list.splice(index, 1);
        // this.state..splice(index, 1);
        codes.splice(codeIndex, 1);
      }
    }
  };

  filterList = (status: boolean | string) => {
    let completed = status === 'all' ? 'all' : status ? true : false;
    const filterLists =  this.state.list.filter(todo => {
      if (completed === 'all') {
        return true;
      }
      return completed === todo.completed;
    });
 
    this.setState({
      list: filterLists
    });
  };

  render() {
    const { list, inputValue } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} placeholder={inputValue} />
        <ul>
          {list.map(todo =>
              <List
                key={todo.id}
                id={todo.id}
                todo={todo}
                deleteTodo={this.deleteTodo}
                todoChange={this.todoChange}
              />
          )}
        </ul>

        <TodoStatus filterList={this.filterList} />
      </div>
    );
  }
};