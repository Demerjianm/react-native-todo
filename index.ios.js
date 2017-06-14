import React from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import TodoApp from './app/components/TodoApp';
import Home from './app/components/Home';
import Products from './app/components/Products';

const myFirstProject = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.link} to='/' replace={true}>
          <Text>Home</Text>
        </Link>
        <Link style={styles.link} to='/todos' replace={true}>
          <Text>Todos</Text>
        </Link>
        <Link style={styles.link} to='/products' replace={true}>
          <Text>Products</Text>
        </Link>
      </View>
      <Route exact path='/' render={ () => (<Home />) } />
      <Route exact path='/todos' render={ () => (<TodoApp />) } />
      <Route exact path='/products' render={ () => (<Products />) } />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  navbar: { flexDirection: 'row' },
  link: { padding: 40 },
});

AppRegistry.registerComponent('myFirstProject', () => myFirstProject);
