import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Picker,
  View
} from 'react-native';

import ModalSelector from 'react-native-modal-selector';

import {styles} from '../config/styles.js';

export class NightModeState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'Schedule'
    };
  }

  render() {
    const data = [
      {
        key: 'on',
        label: 'On'
      }, {
        key: 'off',
        label: 'Off'
      }, {
        key: 'schedule',
        label: 'Schedule'
      }
    ];
    const selectStyle = {
      On: {
        backgroundColor: 'darkred',
        color: 'white'
      },
      Off: {
        backgroundColor: 'darkgreen',
        color: 'white'
      },
      Schedule: {
        backgroundColor: 'darkblue',
        color: 'white'
      }
    }

    if (Platform.OS === 'web')
      return (<View style={styles.hsub}>
        <View style={styles.label}>
          <Text>{this.props.title}{this.props.number}</Text>
      </View>
        <View style={styles.control}>
          <Picker selectedValue={this.state.current} onValueChange={(itemValue, itemIndex) => this.setState({current: itemValue})}>
        {
          data.map(option => {
            return (<Picker.Item label={option.label} value={option.key}/>);
        })
        }
      </Picker>
  </View>
</View>
            )
    else
      return (<View style={styles.hsub}>
        <View style={styles.label}>
          <Text>{this.props.title}{this.props.number}</Text>
        </View>
        <View style={styles.control}>
          <ModalSelector
              selectStyle={{backgroundColor: selectStyle[this.state.current].backgroundColor}}
              selectTextStyle={{color: selectStyle[this.state.current].color}}
              data={data}
              initValue={this.state.current}
              onChange={ (option) => {this.setState({current: option.label})}}/>
        </View>
      </View>);
    }
  }
