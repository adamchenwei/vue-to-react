import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fieldAttributes from './constants/fieldAttributes.js';
import CwFormPassword from '@chewy/design-system/cw-form/cw-form-password';
import CwFormInput from '@chewy/design-system/cw-form/cw-form-input';
export default class Sfwcreateaccountform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static propTypes = {
    name: PropTypes.string,
    nameErrors: PropTypes.array,
    username: PropTypes.string,
    usernameErrors: PropTypes.array,
    password: PropTypes.string,
    passwordErrors: PropTypes.array,
    fieldAttributes: PropTypes.object,
    onBlur: PropTypes.function.isRequired,
    onInput: PropTypes.function.isRequired,
    saveRefsCallback: PropTypes.function.isRequired,
    togglePasswordVisibleCallback: PropTypes.function.isRequired
  };
  static defaultProps = { name: '', username: '', password: '' };
  componentDidMount() {
    setTimeout(() => {
      this.props.props.saveRefsCallback({
        name: this.props.props.$refs.name,
        username: this.props.props.$refs.username,
        password: this.props.props.$refs.password
      });
    }, 2000);
    this.props.props.saveRefsCallback({
      name: this.props.props.$refs.name,
      username: this.props.props.$refs.username,
      password: this.props.props.$refs.password
    });
  }
  render() {
    return (
      <fieldset>
        <CwFormInput
          ref="name"
          automation="name"
          unique-id="name"
          name="name"
          label="Full Name111"
        />
        <CwFormInput
          ref="username"
          automation="username"
          unique-id="username"
          name="username"
          label="Email"
          type="email"
        />
        <CwFormPassword
          ref="password"
          automation="password"
          className="cw-form-password__toggle--override"
          unique-id="password"
          name="password"
          label="Password (Min. 6 Characters)"
        />
      </fieldset>
    );
  }
}
