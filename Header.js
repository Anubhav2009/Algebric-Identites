import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default class HeaderC extends React.Component {
  render() {
    return (
      <Header
        centerComponent={{
          text: 'Algebric Identities',
          style: { color: 'black', fontSize:21.8,fontWeight:"bold"},
        }}
         backgroundColor="#E35335"
      />
    );
  }
}
