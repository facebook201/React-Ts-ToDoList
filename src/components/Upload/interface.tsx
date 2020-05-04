import * as React from 'react';

// 上传的文件信息
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  fileName?: string;
  url?: string;
};

// upload上传组件的
export interface UploadState {
  fileList: UploadFile[];
};

// 组件 props
export interface UploadProps {
  name?: string;
  fileList?: Array<UploadFile>;
}

// 上传
export interface AjaxUploadProps {
  multiple: boolean;
  propTypes: any;
  onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

