import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_store';

import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

import Login from './screens/auth/login/LoginForm';
import SignupForm from "./screens/auth/signup/SignupForm";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard as TwitterDashboard, Settings as TwitterSettings } from './strategies/twitter/strategy.twitter';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();

// {/*<BrowserRouter>*/}
//   {/*<Switch>*/}
//     {/*<Route path="/login" component={Login}/>*/}
//     {/*<Route path="/signup" component={SignupForm}/>*/}
//     {/*<Route path="/strategies/twitter/dashboard" component={TwitterDashboard}/>*/}
//     {/*<Route path="/strategies/twitter/settings" component={TwitterSettings}/>*/}
//     {/*<Route path="/" component={App}/>*/}
//   {/*</Switch>*/}
// {/*</BrowserRouter>*/}
