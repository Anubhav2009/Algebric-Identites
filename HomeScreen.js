import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderC from '../components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <SafeAreaView>
            <View style={styles.appTitle}>
              <HeaderC />
            </View>
          </SafeAreaView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Identity1');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Identity 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Identity2');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Identity 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Identity3');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Identity 3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Identity4');
              }}
              style={styles.button}>
              <Text style={styles.buttonText}> Identity 4</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E35335',
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  button: {
    borderRadius: 6,
    borderColor: 'black',
    borderWidth: 3,
    width: 105,
    height: 30,
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
