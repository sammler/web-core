import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';

const {Footer} = Layout;

class AppFooter extends Component {
  render() {
    return (
      <Footer style={{textAlign: 'center'}}>
        ©2017-2018 Stefan Walther
      </Footer>
    );
  }
}

// AppFooter.propTypes = {};

export default AppFooter;
