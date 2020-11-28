import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {TodoProv} from './Context/TodoProv'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoProv>
    <App />
    </TodoProv>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


