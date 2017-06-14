import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Todo = ({ id, name, completed, update }) => (
  <Text
    style={ completed ? {...styles.todo, ...styles.completed} : styles.todo }
    onPress={() => update(id)}
    >
    { name }
    </Text>
)

const styles = {
  todo: { backgroundColor: 'tan' },
  completed: {
    textDecorationLine: 'line-through',
    color: 'grey',
    backgroundColor: 'lightgreen'
  },
};

export default Todo
