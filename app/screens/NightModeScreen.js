import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';

import {styles} from '../config/styles.js';

import {NightModeState} from '../components/NightMode';

export class NightModeScreen extends Component {
  static navigationOptions = {
    title: 'Night Modes'
  };

  render() {
    const {navigate} = this.props.navigation;
    const nightModes = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ];
    return (nightModes.map((n) => {
      return (<View style={styles.hsub} key={n}>
            <NightModeState title="NightMode" number={n} key={n}/>
          </View>);
    }));

  }
}

AppRegistry.registerComponent('NightModeScreen', () => NightModeScreen);
