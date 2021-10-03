import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './presentation/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from './application/store/ConfigRedux';
import { rootReducer } from './application/store/Reducers';
import { rootEpic } from './application/store/epics/RootEpic';

const store = configureStore(rootReducer, rootEpic);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
