import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
import { login } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;

  ReactDOM.render(<h1>We are in the app</h1>, root);
});
