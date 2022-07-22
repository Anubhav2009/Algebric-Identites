import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './HomeScreen';
export default class Identity2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText}>Identity 4</Text>
          <Image
            source={require('../assets/Identity4.png')}
            style={styles.identity2Image}
            resizeMode="contain"
          />
          <View style={{ marginTop: 54 }}>
            <Text style={styles.bodyText}>
              In identity 4 you can see that there are three variables,x,a and
              b. When we open the brackets x becomes squared while a is added to
              b and x is multiplied into the sum of a and b.The product of a and
              b is also added to (a+b)x and also to the square of x.
            </Text>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Example</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}> (10+1)(10+2)= </Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={{ fontSize: 20 }}>10</Text>
            <Text style={{}}>2</Text>
            <Text style={{ fontSize: 20 }}>+(1+2)10</Text>
            <Text style={{ fontSize: 20 }}>+(1x2)</Text>
            </View>
            <View>
            <Text style={{ fontSize: 20 }}>=100+20+2</Text>
            <Text style={{ fontSize: 20 }}>=122</Text>
          </View>
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
    width: 260,
    height: 90,
    alignSelf: 'center',
  },
  bodyText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
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
