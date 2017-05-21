import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/native/components/header';

class App extends React.Component {
  render() {
    return (
        <Header headerText={'Albums!'} />
    );
  }
}
Expo.registerRootComponent(App);
