import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';
import { TodoList } from './TodoList'

ReactDOM.render(
  <RecoilRoot>
    <TodoList />
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
