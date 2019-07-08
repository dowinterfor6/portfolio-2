import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/reset.css';
import App from './main/App';
import * as serviceWorker from './serviceWorker';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
