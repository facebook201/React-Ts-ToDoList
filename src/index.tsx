/*
 * @Author: shiyao
 * @Description: 小程序4.0
 * @Date: 2020-02-13 09:10:21
 */
import ReactDOM from 'react-dom';
import React from 'react';
import zhCN from 'antd/es/locale-provider/zh_CN';
import 'antd/dist/antd.css';
import App from './App';
/**
 * View 要改变数据
 * 1、首先要页面通过 dispatch 触发 action
 * 2、然后 store 会传action相关参数到 reducer里面处理逻辑
 * 3、处理之后 reducer 返回结果到 store，store 数据改变之后更新到 View
 */

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App />, document.getElementById('root'));
