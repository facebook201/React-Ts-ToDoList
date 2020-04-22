
export interface Options {
  action: string;
  data: any;
  percent: number;
  headers?: any;
  onError?: any;
  onProgress?: any;
  onSuccess?: any;
};

export interface XHR {
  response: string;
  status: number;
  responseText: string;
}

export interface ErrorInstance {
  status: number;
}

import { UploadProgressEvent, HttpRequesetOptions } from '../types/upload';

function getError(action: string, opt: Options, xhr: XHR) {
  let msg;
  if (xhr.response) {
    msg = `${xhr.status} ${xhr.response}`;
  } else if (xhr.responseText) {
    msg = `${xhr.status} ${xhr.responseText}`;
  } else {
    msg = `fail to post ${action} ${xhr.status}`;
  }

  const err = new Error(msg);
  err.message = msg;
  return err;
}

function getBody(xhr: XHR): string {
  const text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }
  try {
    return JSON.parse(text);
  } catch(e) {
    return text;
  }
}


export default function ajax(opt: Options) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  const xhr = new XMLHttpRequest();
  const { action, headers = {} } = opt;

  if (xhr.upload) {
    xhr.upload.onprogress = function(e) {
      if (e.total) {
        opt.percent = e.loaded / e.total * 100;
      }
      // 上传进度
      return opt.onProgress(opt);
    }
  }

  if (xhr.onload) {
    xhr.onload = function() {
      if (xhr.status < 200 || xhr.status > 300) {
        return opt.onError(getError(action, opt, xhr));
      }
      return opt.onSuccess(xhr);
    }
  }

  const formData = new FormData();

  if (opt.data) {
    Object.keys(opt.data).map(key => {
      formData.append(key, opt.data[key]);
    });
  }

  xhr.open('POST', action, true);

  for (let item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }

  xhr.send(formData);
  return xhr;
}