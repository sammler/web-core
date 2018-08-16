import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Button, Input, Alert } from 'antd';
import { userActions } from "../_actions";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('values', values);
        const {username, password, email} = values;
        const {dispatch} = this.props;
        if (username && password && email) {
          dispatch(userActions.signUp(username, password, email));
        } else {
          console.error('Cannot dispatch', values);
        }
      } else {
        console.log('We have an error', err);
      }
    });
  }

  render() {

    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const emailError = isFieldTouched('email') && getFieldError('email');

    const {alert} = this.props;
    let alertComponent = null;
    if (alert && alert.type) {
      alertComponent = <div><Alert message={alert.message} type={alert.type} showIcon closable /></div>
    }

    return (
      <div>
        <h2>Sign up</h2>
        {alertComponent}
        <Form onSubmit={this.handleSubmit}>
          <Form.Item
            label="Username"
            validateStatus={userNameError ? 'error' : ''}
          >
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
            )}
          </Form.Item>
          <Form.Item
            label="Password"
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your password!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                     placeholder="Password"/>
            )}
          </Form.Item>
          <Form.Item
            label="E-Mail"
            validateStatus={emailError ? 'error' : ''}
            help={emailError || ''}
          >
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Please input your E-Mail!'}],
            })(
              <Input prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="E-Mail"/>
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              Sign up
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const alert = state.alert;
  return {
    alert
  };
}

const WrappedPage = Form.create()(connect(mapStateToProps)(SignupPage));
export { WrappedPage as SignupPage }
