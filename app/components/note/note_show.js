import React,{ Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';



export default class Note extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', padding:30}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <Text>Title of the Song</Text>

      </View>
    );

  }
}
