/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TodoItem from './todo-item';
import InputText from './input-text';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      todos: []
    }
  }
  render() {
    const { text, todos } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          To-Do List
        </Text>
        <Text style={styles.instructions}>
          Manage what you have to work on with a simple and easy to use interface
        </Text>
        { todos.map(todo => <TodoItem title={todo}></TodoItem>) }
        <Text style={styles.instructions}>
          {text}
        </Text>
        <InputText
          submit={(text) => this.setState({todos: [...todos, text]})}
          color='violet'
        ></InputText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16
  },
  welcome: {
    fontSize: 32,
    textAlign: 'center',
    margin: 12,
    color: '#313131'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
