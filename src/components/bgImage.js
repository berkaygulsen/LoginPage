import React, { Component } from 'react';
import { ImageBackground,View, Image } from 'react-native';


class BackgroundImage extends Component {

  render() {
    return (
      <ImageBackground children={this.props.children} source={require('../resources/login-background.png')} style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
    )
  };
};

export default BackgroundImage;