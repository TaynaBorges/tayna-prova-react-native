import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Navigator from './src/Navigator';


export default function App() {
  return (
    <>
      <StatusBar/>
      <Navigator/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },
});
