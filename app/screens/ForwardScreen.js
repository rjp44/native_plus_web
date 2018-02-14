import React, { Component } from 'react';
import {
     AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { styles } from '../config/styles.js';

import { PhoneNumber } from '../components/PhoneNumber.js';
import { ForwardState } from '../components/ForwardState.js';

export class ForwardScreen extends Component {
  static navigationOptions = {
    title: 'Call Forwards'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
<View style={styles.container}>
        <ForwardState title="Forward"/>
        <PhoneNumber title="Number"/>
      </View>);


  }
}

AppRegistry.registerComponent('ForwardScreen', () => ForwardScreen);
