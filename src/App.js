import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';

import { history } from './_helpers';
import { alertActions } from "./_actions";
import { PrivateRoute } from "./_components";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

// my
import './App.css';
import { Layout } from 'antd';
import { AppHeader } from './app/AppHeader';
import { AppSideMenu } from './app/AppSideMenu';
import AppFooter from './app/AppFooter';
import AppBreadcrumb from './app/AppBreadcrumb';

const {Content} = Layout;

class App extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {
    // const basePath = '/' + location.pathname.split('/')[1]; // eslint-disable-line no-restricted-globals

    // Todo: enable alert
    // const {alert} = this.props;
    return (

      <Router history={history}>
        <Layout>
          <AppHeader/>
          <Content style={{padding: '0 50px'}}>
            <AppBreadcrumb/>
            <Layout style={{padding: '24px 0', background: '#fff'}}>
              <AppSideMenu/>
              <Content style={{padding: '0 24px', minHeight: 280}}>
                <PrivateRoute exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>
              </Content>
            </Layout>
          </Content>
          <AppFooter/>
        </Layout>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
