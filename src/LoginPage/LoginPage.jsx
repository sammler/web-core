import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';

import { userActions } from '../_actions';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // Todo: Move to dedicated logout page
    // reset login status
    this.props.dispatch(userActions.logout());

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        //console.log('Received values of form: ', values);
        this.setState({submitted: true});
        const {username, password} = values;
        const {dispatch} = this.props;
        if (username && password) {
          dispatch(userActions.login(username, password));
        }
      }
    });
  }

  render() {

    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <div>
        <h2>Login</h2>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {loggingIn} = state.authentication;
  return {
    loggingIn
  };
}

const WrappedLoginPage = Form.create()(connect(mapStateToProps)(LoginPage));
export { WrappedLoginPage as LoginPage };
