import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';

export default class Identity1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Identity 1</Text>
        <View>
          <Image
            source={require('../assets/Identity1.png')}
            style={styles.identity1Image}
            resizeMode="contain"
          />
          <Text style={styles.bodyText}>
            In identity 1 the it is written that (a+b)square.When we open the
            brackets, the square gets multiplied with a, a gets multiplied with
            b twice and b gets multiplied with the square.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>Example</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>(23+22)</Text>
            <Text>2</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 20 }}>=23</Text>
            <Text>2</Text>
            <Text style={{ fontSize: 20 }}>+2(23*22)+22</Text>
            <Text>2</Text>
          </View>
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 20 }}> =529+1012+484</Text>
          </View>{' '}
          <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 20 }}>=2025</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}
              style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Home Screen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E35335',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'Arial',
  },
  identity1Image: {
    width: 300,
    height: 116,
  },
  bodyText: {
    flex: 1,
    justifyContent: 'center',
    fontSize:20,
  },
  homeButton: {
    borderRadius: 6,
    borderColor: 'black',
    backgroundColor: 'black',
    borderWidth: 3,
    width: 105,
    height: 30,
    marginBottom: 6,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  homeButtonText: {
    color: '#E35335',
  },
});
