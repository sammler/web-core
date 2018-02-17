import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

class AppBreadcrumb extends Component {
  render() {
    return (
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item>Strategies</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

// AppBreadcrumb.propTypes = {};

export default AppBreadcrumb;
