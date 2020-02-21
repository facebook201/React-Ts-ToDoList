import React, { ReactNode, Component } from 'react';
import Button from './components/Button';
import Logo from './practice';

class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    });
  }

  render() {
    return (
      <div onClick={this.increment}>
        {
          this.props.children(this.state.count)
        }
      </div>
    )
  }
}


export default class App extends React.Component {
  handleClick = () => {
    console.log('clicked');
  }

  render () {
    return (
      <div className="App">
        <Counter>
          {
            count => (
              <div>
                <h1>The Count is: { count }</h1>
              </div>
            )
          }
        </Counter>
        <Button onClick={this.handleClick}>
          Click me
        </Button>
        <Logo logo="ass" />
      </div>
    );
  }
}

// DefaultProps
interface InputSetting {
  placeholder?: string
  maxlength?: number
}

const todoInputDefaultProps = {
  inputSetting: {
    maxlength: 20,
    placeholder: '请输入todo'
  }
};

type Props = {
  handleSubmit: (value: string) => void
  children: React.ReactNode
} & Partial<typeof todoInputDefaultProps>;

class TodoInput extends React.Component <Props, State> {
  public static defaultProps = {
    inputSetting: {
      maxlength: 20,
      placeholder: '请输入todo'
    }
  }

  render() {
    const { handleSubmit, inputSetting } = this.props;

    return (
      <form>
        <input maxLength={inputSetting.maxlength} />
      </form>
    );
  }
}

