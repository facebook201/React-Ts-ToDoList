import * as React from 'react';

type DefaultProps = {
  color: 'bule' | 'green' | 'red'
  type: 'button' | 'submit'
};

type ButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void;
} & Partial<DefaultProps>

class Button extends React.Component<ButtonProps> {
  static defaultProps: DefaultProps = {
    color: 'red',
    type: 'button'
  };

  render() {
    const { onClick: handleClick, color, type, children } = this.props;
    return (
      <button
        type={type}
        style={{color}}
        onClick={handleClick}
        >
          { children }
      </button>
    );
  }
}

export default Button;
