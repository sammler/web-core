import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { history } from "../_helpers";
import { alertActions } from "../_actions";

const {SubMenu} = Menu;
const {Sider} = Layout;

class AppSideMenu extends Component {

  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  render() {

    let menu = null;
    menu = <Menu
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
        <Menu.Item key="2.5"><Link to="/strategies/github/settings">Settings</Link></Menu.Item>
      </SubMenu>
    </Menu>

    return (
      <div>
        {(this.props.authentication.loggedIn) ? (
          <Sider width={200} style={{background: '#fff'}}>
            {menu}
          </Sider>
        ) : (
          <div/>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {user, authentication} = state;
  return {
    user,
    authentication
  };
}

const component = connect(mapStateToProps)(AppSideMenu);
export { component as AppSideMenu };
