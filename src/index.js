import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueueContextProvider } from './store/queue-context';

ReactDOM.render(
  <QueueContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueueContextProvider>,
  document.getElementById('root')
);
