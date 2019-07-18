/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import _ from 'lodash';

export default class Presentation extends Component {

  async componentDidMount() {
    _.delay(() => this.props.navigation.navigate('Login'), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Gerencie Seus Dispositivos!</Text>
        <Text style={styles.instructions}>Bem Vindo a Sose Tech Automação</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

Presentation.navigationOptions = {
  header: null,
}
