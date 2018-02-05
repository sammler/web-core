import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './screens/auth/login/LoginForm';
import SignupForm from "./screens/auth/signup/SignupForm";
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();