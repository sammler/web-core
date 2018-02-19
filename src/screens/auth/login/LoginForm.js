import React, { Component } from 'react';
import { Layout } from 'antd';
import AppHeader from "../../../app/AppHeader";
import AppFooter from "../../../app/AppFooter";

import { userActions } from './../../../_actions';

// import PropTypes from 'prop-types';

const {Content} = Layout;

class LoginForm extends Component {

  constructor(props) {
    super(props);

    // Todo: move to separate logout page
    // reset login status
    this.props.dispatch(userActions.logout());

  }

  render() {
    return (
      <Layout>
        <AppHeader/>
        <Content style={{padding: '0 50px'}}>
          <Layout  style={{minHeight: '52px'}}/>
          <Layout style={{padding: '24px 0', background: '#fff'}}>
            <Content style={{padding: '0 24px', minHeight: 280}}>
              log in
            </Content>
          </Layout>
        </Content>
        <AppFooter/>
      </Layout>
    );
  }
}

// LoginForm.propTypes = {};

export default LoginForm;
