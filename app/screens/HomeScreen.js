import React, { Component } from 'react';
import {
     AppRegistry,
    Button,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { styles } from '../config/styles.js';


export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: `${Platform.OS} App`,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>

        <Button
          onPress={() => navigate('Forward')}
          title="Set forwards"
        />
        <Button
          onPress={() => navigate('NightMode')}
          title="Manage Nightmodes"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
