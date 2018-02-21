import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import './AppHeader.css';
import { history } from "../_helpers";
import { alertActions } from "../_actions";

const {Header} = Layout;

class AppHeader extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {

    const menus = [];
    menus.push({
      key: 0,
      title: 'Sign up',
      link: '/signup'
    });
    if (this.props.user) {
      menus.push({
        key: 1,
        title: 'Logout',
        link: '/login'
      })
    } else {
      menus.push({
        key: 2,
        title: 'Login',
        link: '/login'
      })
    }

    return (
      <Header className="header">
        <div className="logo"/>
        <Row type="flex" justify="end">
          <Col>
            <Menu
              theme="dark"
              mode="horizontal"
              style={{lineHeight: '64px'}}
            >
              {menus.map(menu => <Menu.Item key={menu.key}><Link to={menu.link}>{menu.title}</Link></Menu.Item>)}
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

function mapStateToProps(state) {
  const {users, authentication} = state;
  const {user} = authentication;
  return {
    user,
    users
  };
}

const component = connect(mapStateToProps)(AppHeader);
export { component as AppHeader };
