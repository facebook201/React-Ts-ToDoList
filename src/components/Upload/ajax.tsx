export interface Options {
  action: string;
};

export interface XHR {
  response: string;
  status: number;
  responseText: string;
}

export interface ErrorInstance {
  status: number;
}

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
  const { action } = opt;
}