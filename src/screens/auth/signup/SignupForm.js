import React, { Component } from 'react';
import './SignupForm.css';
import { Layout } from 'antd';
import AppHeader from "../../../app/AppHeader";
import AppFooter from "../../../app/AppFooter";
// import PropTypes from 'prop-types';

const {Content} = Layout;

class SignupForm extends Component {
  render() {
    return (
      <Layout>
        <AppHeader/>
        <Content>
          SignupForm
        </Content>
        <AppFooter/>
      </Layout>
    );
  }
}

// SignupForm.propTypes = {};

export default SignupForm;
