import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentation/App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './application/store/UserProvider/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
