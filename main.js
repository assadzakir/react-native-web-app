import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/native/components/header';
import AlbumsList from './src/native/components/AlbumList';

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumsList />
      </View>
    );
  }
}
Expo.registerRootComponent(App);
