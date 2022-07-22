import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default class Identity3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titleText} > Identity 3 </Text>
          <Image
            source={require('../assets/Identity3.png')}
            style={styles.identity1Image}
          />
          <Text style={styles.bodyText}>
            In identity 3 we can see that a is squared; it is also being
            subtracted by b which is also squared. This is the easier method of
            solving the equation on the right.
          </Text>
          <Text style={{ fontWeight: 'bold' }}>Example</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}> 12 </Text>
            <Text>2</Text>
            <Text style={{ fontSize: 20 }}>-14</Text> <Text>2</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>=(12+14)(12-14)</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>=26*-2=</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>-56 </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}
              style={styles.homeButton}>
              <Text style={styles.homeButtonText}> Home Screen </Text>
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
    width: 310,
    height: 60,
    alignSelf: 'center',
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
