import React, { Component } from 'react';
import { Route } from 'react-router';

import Dashboard from './dashboard/twitter.dashboard';
import Settings from './settings/twitter.settings';

const routes = [
  {
    path: '/strategies/twitter/dashboard',
    component: Dashboard
  },
  {
    path: '/strategies/twitter/settings',
    component: Settings
  }
];

class Routes extends Component {
  render() {
    return routes.map(( {path, component}, key) => <Route exact path={path} component={component} key={key} />);
  }
}

export {
  Routes
}
