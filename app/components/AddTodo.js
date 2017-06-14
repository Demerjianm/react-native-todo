import React, { Component } from 'react'
import {TextInput, View } from 'react-native'

export default class AddTodo extends Component {
    state = { todo: '' }

    addTodo = () => {
      this.props.addTodo(this.state.todo)
      this.setState({ todo: '' })
    }

    render() {
      return(
        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder='Add Todo'
            value={this.state.todo}
            onChangeText={ todo => this.setState({ todo })}
            onSubmitEditing={this.addTodo}
            blurOnSubmit={false}
          />
        </View>
    )
  }
}
