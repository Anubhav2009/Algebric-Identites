import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Identity1 from './screens/Identity1';
import Identity2 from './screens/Identity2';
import Identity3 from './screens/Identity3';
import Identity4 from './screens/Identity4';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const SwitchNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Identity1: Identity1,
  Identity2: Identity2,
  Identity3: Identity3,
  Identity4: Identity4,
});

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({});
