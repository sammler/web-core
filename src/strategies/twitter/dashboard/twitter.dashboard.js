import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
import AppHeader from './../../../app/AppHeader';
import AppFooter from './../../../app/AppFooter';
import AppBreadcrumb from './../../../app/AppBreadcrumb';
import AppSideMenu from './../../../app/AppSideMenu';

const {Content} = Layout;

class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <AppHeader/>
        <Content style={{padding: '0 50px'}}>
          <AppBreadcrumb/>
          <Layout style={{padding: '24px 0', background: '#fff'}}>
            <AppSideMenu/>
            <Content style={{padding: '0 24px', minHeight: 280}}>
              <h2>Twitter: Dashboard</h2>
            </Content>
          </Layout>
        </Content>
        <AppFooter/>
      </Layout>
    );
  }
}

// Dashboard.propTypes = {};

export default Dashboard;
