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

// import reducers from './store';
// import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { get } from 'axios';

function reducers(state = { count: 1 }, action) {
  switch (action.type) {
    case 'COUNT_ADD':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

function postReducer(state = { list: [ { title: '你好！'} ] }, action) {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state, list: action.payload
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  reducers,
  postReducer
});


const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk])
  )
);

store.dispatch({
  type: 'COUNT_ADD',
  payload: {}
});

const getPostsRequest = () => {
  return get('https://jsonplaceholder.typicode.com/posts');
}

async function aDispatch(dispatch) {
  const res = await getPostsRequest();
  console.log(res);
  dispatch({
    type: 'LOAD_POSTS',
    payload: res.data
  });
}

store.dispatch(aDispatch);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));