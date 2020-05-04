import React, { Component } from 'react';
import classNames from 'classnames';
import { AjaxUploadProps } from './interface';

export default class AjaxUpload extends Component<AjaxUploadProps> {
  static defaultProps = {
    name: 'file'
  };

  handleClick = (): void => {

  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    
  };


  render() {
    const className = classNames({
      'dm-upload': true,
    });
    const { multiple } = this.props;
    return (
      <div
        className={className}
        onClick={() => this.handleClick}>
          <input
            className="dm-upload--input"
            type="file"
            ref="uploadInput"
            onChange={e => this.handleChange(e)}
            multiple={multiple}
          />
      </div>
    );
  }
};
