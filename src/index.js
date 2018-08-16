import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_store';

import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
