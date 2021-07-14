import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const listItems = ["One", "Two", "Three", "Four"]

ReactDOM.render(
  <React.StrictMode>
    <App list={listItems} />
  </React.StrictMode>,
  document.getElementById('root')
);
