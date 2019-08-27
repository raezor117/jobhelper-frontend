/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import LoginComponent from './components/security/login/login';

export default class DemoLogin extends Component {
  render() {
    return (
     <LoginComponent />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);