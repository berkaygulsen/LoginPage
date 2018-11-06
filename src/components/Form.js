import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import UserInput from './common/UserInput';
import Button from './common/Button';


class Form extends Component {
  state = { email: '', password: '', error: '' }

  render() {
    return (
      <View> 
        <UserInput 
          value= {this.state.email}
          onChangeText={email => this.setState({ email })}
          placeholder='EMAIL OR USERNAME'
          style={{ marginTop: 50, borderTopWidth: 1, }}
        />
        <UserInput 
          value= {this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder='PASSWORD'
          style={{ marginTop: 5 }}
          secureTextEntry={true}
        />
        <Button onPress={/*onPress Event*/ null} style={{ marginTop: 10 }}>LOGIN</Button> 
        <Button onPress={/*onPress Event*/ null} style={{backgroundColor: 'transparent',
          flexDirection:'row', 
          justifyContent: 'flex-start',
          
        }} externalStyle={{fontSize: 16}}>Forgot your password?</Button>

        <Button 
        onPress={/*onPress Event*/ null}
        style={{
          backgroundColor: '#3b5998'

        }}>
          LOGIN WITH FACEBOOK
        </Button>

        <Button 
        onPress={/*onPress Event*/ null}
        style={{
          backgroundColor: '#5386ae',
          marginTop: 10

        }}>
          LOGIN WITH INSTAGRAM
        </Button>

        <Button 
        onPress={/*onPress Event*/ null}
        style={{
          backgroundColor: 'transparent',
          flexDirection:'row', 
          justifyContent: 'flex-start',
          marginTop: 5

        }}
        externalStyle={{ fontSize: 16 }}
        >
          Not have an account yet? <Text style={{fontWeight: 'bold'}}>Sign Up</Text>
        </Button>

      </View>
      
    )
  }
}
export default Form;