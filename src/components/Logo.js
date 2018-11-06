import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image source={require('../resources/logo.png')} style={styles.logoStyle} />
  )
}

const styles = {
  logoStyle: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    top: 40
  }
}

export default Logo;