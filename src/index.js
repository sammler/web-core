import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './screens/auth/login/LoginForm';
import SignupForm from "./screens/auth/signup/SignupForm";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Dashboard as TwitterDashboard, Settings as TwitterSettings } from './strategies/twitter/strategy.twitter';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/strategies/twitter/dashboard" component={TwitterDashboard}/>
      <Route path="/strategies/twitter/settings" component={TwitterSettings}/>
      <Route path="/" component={App}/>
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
