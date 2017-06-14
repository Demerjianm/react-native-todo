import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Todo from './Todo'

class TodoList extends Component {
  displayTodos = () => {
    return this.props.todos.map( todo => {
      return(<Todo update={this.props.update} key={todo.id} {...todo} />)
    })
  }

  render() {
    return(
      <ScrollView>
        { this.displayTodos() }
      </ScrollView>
    )
  }
}


export default TodoList
