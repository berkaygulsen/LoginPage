import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, style, children, externalStyle }) => {

  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
      <Text style={[textStyle, externalStyle]}>{children}</Text>
    </TouchableOpacity>
    
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
    paddingVertical: 12
  },

  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 2,
    marginHorizontal: 40,
    height: 50,

  }
}




export default Button;