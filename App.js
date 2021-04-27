import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <TextInput
    style={styles.inputBox}
    onChangeText={text =>{
      this.setState({
        text: text,
        isSearchPressed: false,
        word : "Loading..........",
        lexicalCategory:'',
        examples : [],
        defination : ""

      });
    }}
    value={this.state.text}
    />

    <TouchableOpacity
    style={styles.searchButton}
    onPress={() => {
      this.setState({isSearchPressed: true });
      this.getWord(this.state.text)
    }}>

    
     
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },


  getWord=(word)=>{
  var searchKeyword=word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"+searchKeyword+".json"
   return fetch(url)
   .then((data)=>{
     if(data.status===200)
     {
       return data.json()
     }
     else
     {
       return null
     }
   })
});



