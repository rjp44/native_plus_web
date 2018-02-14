/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';


import { styles } from './config/styles.js';

import { HomeScreen } from './screens/HomeScreen.js';
import { ForwardScreen } from './screens/ForwardScreen.js';
import { NightModeScreen } from './screens/NightModeScreen.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const NativePlusWebApp = StackNavigator({
  Home: { screen: HomeScreen },
  Forward: { screen: ForwardScreen },
  NightMode: { screen: NightModeScreen }
});

export default class App extends Component {
  render() {
    return(
        <NativePlusWebApp />
    );
  }
}
/*
export default class App extends Component {
  render() {
    return (<View style={styles.container}>
      <ForwardState title="Forwards"/>
      <PhoneNumber title="Number"/>
    </View>);
  }
}
*/
AppRegistry.registerComponent('NativePlusWebApp', () => NativePlusWebApp);
