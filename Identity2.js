import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
export default class Identity2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Identity 2</Text>
          <Image
            source={require('../assets/Identity2.png')}
            style={styles.identity2Image}
            resizeMode="contain"
          />
          <Text style={styles.bodyText}>
            In identity 2 the it is written that (a-b)square.When we open the
            brackets, the square gets multiplied with a, a gets multiplied with
            b twice and b gets multiplied with the square.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>Example</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>(23-22)</Text>
            <Text>2</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>=23</Text>
            <Text>2</Text>
            <Text style={{ fontSize: 20 }}>-2(23*22)+22</Text>
            <Text>2</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20 }}>=529-1012+484</Text>
          </View>
          <Text style={{ fontSize: 20 }}>=1</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomeScreen');
            }}
            style={styles.homeButton}>
            <Text style={styles.homeButtonText}>Home Screen</Text>
          </TouchableOpacity>
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
  identity2Image: {
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
