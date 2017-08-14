import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  //TextInput > User taps then Types > onChangeText called
  //'setState' is called with new text
  //component rerenders because we called setState
  //when state re-renders the new state gets its next state
  //from 'this.state.text' is the state of LoginForm
  //TextInput has no responsibility to know the value of the text
  //We use this.setState to change the value of TextInput
  //the text exists as a piece of state on our component
  //secureTextEntry is the same as secureTextEntry={true}, boolean implied

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

//onChangeText={password => this.setState({ password })}


export default LoginForm;
