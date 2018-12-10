import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  //for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>We are in the app</h1>, root);
});
