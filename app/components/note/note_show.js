import React,{ Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';


export default class Note extends Component {
  constructor(props){
    super(props);
    this.state = {title: '',body: ''};
  }
  render(){

    return(
      <View>
        <TextInput
          placeholder="Add a title"
          style={{padding:20, paddingTop: 20, fontSize:24}}
          onChangeText={(title) => this.setState({title})}

        />
        <TextInput
          placeholder="Add a note"
          style={{padding:20, paddingTop: 20, fontSize:20}}
          onChangeText={(body) => this.setState({body})}
          multiline={true}
        />
</View>


    );

  }
}
