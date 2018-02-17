import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

const {SubMenu} = Menu;
const {Sider} = Layout;

class AppSideMenu extends Component {
  render() {
    return (
      <Sider width={200} style={{background: '#fff'}}>
        <Menu
          mode="inline"
          defaultOpenKeys={['sub1']}
          defaultSelectedKeys={['1.0']}
          style={{height: '100%'}}
        >
          <SubMenu key="sub1" title={<span><Icon type="twitter"/>Twitter</span>}>
            <Menu.Item key="1.0"><Link to="/strategies/twitter/dashboard">Dashboard</Link></Menu.Item>
            {/*<Menu.Item key="1.1">Followers</Menu.Item>*/}
            {/*<Menu.Item key="1.2">Unfollowers</Menu.Item>*/}
            {/*<Menu.Item key="1.3">Connections</Menu.Item>*/}
            {/*<Menu.Item key="1.4">History</Menu.Item>*/}
            <Menu.Item key="1.5"><Link to="/strategies/twitter/settings">Settings</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="github"/>GitHub</span>}>
            {/*<Menu.Item key="2.1">option5</Menu.Item>*/}
            {/*<Menu.Item key="2.2">option6</Menu.Item>*/}
            {/*<Menu.Item key="2.3">option7</Menu.Item>*/}
            {/*<Menu.Item key="2.4">option8</Menu.Item>*/}
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

// AppSideMenu.propTypes = {};

export default AppSideMenu;
