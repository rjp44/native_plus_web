import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  hsub: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  vsub: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  label: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  control: {
    flex: 3,
    alignItems: 'stretch',
    justifyContent: 'space-around'
  },
  fullcontrol: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10
  },
  heading: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 10
  },
  h1: {
  fontWeight: 'bold',
  fontSize: 19,
  textAlign: 'center'
},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export {
  styles
};
