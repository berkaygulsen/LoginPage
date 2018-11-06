import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BackgroundImage from './components/bgImage';
import Logo from './components/Logo';
import Form from './components/Form';


class App extends Component {

  render() {
    return (
      <BackgroundImage>
        <View>
          <Logo />
          <Form />
        </View>
      </BackgroundImage>
    )
  }

}

export default App;