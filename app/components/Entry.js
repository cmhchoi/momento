import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    flex: 1,
    fontSize: 26,
    textAlign: 'center',
    marginTop: 100,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Login screen</Text>
      </View>
    );
  }
}

module.exports = Login;
