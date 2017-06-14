import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  state = { todos: [], nextId: 0 };

  addTodo = (name) => {
    let { nextId, todos } = this.state;
    let id = nextId;
    let todo = { name, completed: false, id };
    this.setState({ todos: [todo, ...todos], nextId: ++nextId });
  }

  update = (id) => {
    let todos = this.state.todos.map( todo => {
      if(id === todo.id)
        return { ...todo, completed: !todo.completed };
      else
        return todo;
    });
    this.setState({ todos });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.welcome}>Todo List</Text>
        <AddTodo addTodo={this.addTodo} />
        <TodoList update={this.update} todos={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
  },
});
