
import * as React from 'react';


import {
  UploadState,
  UploadProps,
} from './interface';


export default class Upload extends React.Component<UploadProps, UploadState> {
  state: UploadState;

  static defaultProps = {
    headers: {},
    name: 'file',
    action: '',
    data: {},
    beforeUpload: T,
    className: '',
    showUploadList: true,
  };

  static getDerviedStateFromProps(nextProps: UploadProps) {
    if ('fileList' in nextProps) {
      return {
        fileList: nextProps.fileList || [],
      };
    }
    return null;
  }

  upload: any;

  constructor(props: UploadProps) {
    super(props);

    this.state = {
      fileList: props.fileList || []
    };
  }

  componentWillMount() {
    this.clearProgressTimer();
  }


  clearProgressTimer() {
    clearInterval(this.progressTimer);
  }

  render() {
    /**
     * 可以有提示文案，支持手动上传 不自动上传
     **/

    return (
      <div className="dm-upload">
        {  }
        {  }
        {  }
      </div>
    );
  };
};

