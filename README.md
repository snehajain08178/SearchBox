# SearchBox

A pretty awesome search bar for React Native. 

<!-- ![react-native-searchbar](http://drive.google.com/uc?export=view&id=1p45erAFNXq35AU525ub9jYZEzAu55kv3) -->
<img src="http://drive.google.com/uc?export=view&id=1p45erAFNXq35AU525ub9jYZEzAu55kv3" title="Github Logo" width="256" height="500">


## Installation

```bash
yarn add react-native-searchbox-1
```

or

```bash
npm i react-native-searchbox-1
```

## Available Props

Property	|	Description |
:---------|:------------|
placeholder	|		The placeholder for the search bar.
style | Sets the style for searchBox.
placeHolderStyling |  Sets style for placeHolder.
placeholderTextColor |  Sets color of placeHolder.
onChangeText | Used to write search logic .
clearStyling |  Sets style for clear Button

  
## Usage

- Write your own search logic with `onChangeText` and use the results handed back from `onChangeText`.
- Use your powers for good!


## Example

```
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import SearchBox from 'react-native-searchbox-1';

class App extends React.Component {

   state={
      list : ['Apple','Apricot','Avocdo','Banana'],
      resultList : []
    }

    filterSearch = (text) => {
        const searchingText = text.toUpperCase()
        const upperCaseList = []
        for(let i=0;i<this.state.list.length;i++)
        {
          upperCaseList.push(this.state.list[i].toUpperCase())
        }
        const filteredList = upperCaseList.filter(word => word.indexOf(searchingText)>-1)
        this.setState({
          resultList: filteredList
        })
    }

render(){
  return (
   <View>
     <SearchBox style={styles.searchBox} 
     onChangeText={(text) => this.filterSearch(text)}/>
     <FlatList 
     data = {this.state.resultList}
     renderItem = {({item}) => (
        <View style={styles.view}>
        <Text>{item}</Text>
        </View>
     )}/>
   </View>
  )
}}

const styles = StyleSheet.create({
    searchBox: {
        marginTop: 20
    },
    view: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 8,
        marginTop: 10,
        alignItems: 'center'
    }
});

export default App;
```
