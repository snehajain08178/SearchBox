import React from 'react';
import {View,Text,TextInput,FlatList,StyleSheet, Button, TouchableOpacity} from 'react-native';

class SearchBox extends React.Component { 

    clear = () => {
      this.textInput.clear();
    }

    render (){
      return (
        <View>
        <View style={[styles.mainContainer,this.props.style]}>
          <TextInput 
          style={[styles.textInput,this.props.placeHolderStyling]}
          placeholderTextColor={this.props.placeHolderTextColor}
        ref = {input => { this.textInput = input }}
        placeholder={this.props.placeHolder}
        onChangeText={this.props.onChangeText}
          />
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() => this.clear()}>
            <Text style={[styles.clear,this.props.clearStyling]}>Clear</Text>
          </TouchableOpacity>
        </View>
         </View>
        )
    }
  }

SearchBox.defaultProps = {
  placeHolder: 'Enter Text',
}

  const styles = StyleSheet.create({
    mainContainer:{flexDirection:'row',borderWidth:2,justifyContent:'space-between'},
    textInput: {
      fontSize: 20,
    },
    clear : {fontSize:20,marginRight: 20,color:'grey',textAlign:'center'}
  })

export default SearchBox;