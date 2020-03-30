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

// import reducers from './store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));