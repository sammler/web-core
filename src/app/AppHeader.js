import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './AppHeader.css';
import { Link } from 'react-router-dom';

const {Header} = Layout;

class AppHeader extends Component {

  render() {
    return (
      <Header className="header">
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1"><Link to='/login'>Login</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/Signup'>Signup</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/logout'>Logout</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default AppHeader;
