import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// 按钮类型
export type ButtonType = 'default' | 'primary' | 'ghost' | 'danger';
// 按钮大小
export type ButtonSize = 'small' | 'default' | 'large';
// 按钮提交类型
export type ButtonHTMLType = 'submit' | 'button' | 'reset';


// 按钮的基础属性
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  children?: React.ReactNode;
};

// 因为存在a标签 存在一些锚属性
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// native 按钮属性
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

// 最终属性
export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export default class Button extends React.Component<ButtonProps, any> {

  // static defaultProps = {
  //   loading: false,
  //   block: false,
  //   ghost: false,
  // };

  handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
    const { onClick } = this.props;
    // if (!!loading) {
    //  return;
    // }
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)(e);
    }
  }

  render() {
    const {
      type,
      size,
      className,
      children,
      ...rest
    } = this.props;

    // 样式组合
    const classes = classNames('dm-btn', className, {
      [`dm-btn-${type}`]: type,
      [`dm-btn-${size}`]: size,
    });

    if ('href' in rest) {
      return (
        <a
          {...rest}
          onClick={this.handleClick}
          className={classes}>
          { children }
        </a>
      )
    } else {
      const { htmlType, ...otherProps } = rest;
      return (
        <button
          { ...otherProps}
          type={htmlType || 'button'}
          onClick={this.handleClick}
          className={classes}>
        </button>
      );
    }
  }
}