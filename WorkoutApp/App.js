/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AppContainer from './src/Navigation/navigation'

class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
export default App;
