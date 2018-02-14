import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Picker,
  View
} from 'react-native';

import { styles } from '../config/styles.js';

export class ForwardState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forward: false
    };
  }

  render() {
      const data = [
        {
          key: 'off',
          label: 'Off'
        }, {
          key: 'always',
          label: 'Always'
        }, {
          key: 'noanswer',
          label: 'No Answer'
        }
      ];
    return (<View style={styles.vsub}>
      <View style={styles.heading}>
        <Text style={styles.h1}>{this.props.title}</Text>
      </View>
      <View style={styles.fullcontrol}>
            <Picker style={styles.fullcontrol} selectedValue={this.state.forward} onValueChange={(itemValue, itemIndex) => this.setState({forward: itemValue})}>
          {
            data.map(option => {
              return (<Picker.Item key={option.key} label={option.label} value={option.key}/>);
          })
          }
        </Picker>
      </View>
    </View>);
  }
}
