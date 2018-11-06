import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';


const UserInput = ({ value, onChangeText, placeholder, secureTextEntry, style }) => {
  
  return(
    <View style={[styles.containerStyle, style]}>
      <TextInput 
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.inputStyle}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={'rgba(255,255,255,0.5)'}
      />
    </View>
      
  )

}

const styles = {
  inputStyle: {
    color: 'rgba(255,255,255,0.8)',
    paddingRight: 5,
    paddingLeft: 15,
    fontSize: 18,
    paddingVertical: 0,
    flex: 1,
    height: 60,
    
  },
  containerStyle: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 40,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  }
}

export default UserInput;