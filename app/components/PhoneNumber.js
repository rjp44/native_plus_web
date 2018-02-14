import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  Switch,
  View
} from 'react-native';

import { styles } from '../config/styles.js';


export class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '012345678'
    };
  }

  render() {
    return (
      <View style={styles.vsub}>
      <View style={styles.heading}>
        <Text style={styles.heading}>{this.props.title}</Text>
      </View>
      <View style={styles.fullcontrol}>
        <TextInput textAlign={'center'} placeholder={'number'} onChangeText = {(text) => this.setState({number: text})} value={this.state.number} keyboardType="phone-pad"></TextInput>
      </View>
    </View> );
  }
}
