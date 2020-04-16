import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app.js'
import './index.scss';

function Root(){
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

render(<Root />, document.getElementById('root'));
