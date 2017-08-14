import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: '' };

  //TextInput > User taps then Types > onChangeText called
  //'setState' is called with new text
  //component rerenders because we called setState
  //when state re-renders the new state gets its next state
  //from 'this.state.text' is the state of LoginForm
  //TextInput has no responsibility to know the value of the text
  //We use this.setState to change the value of TextInput
  //the text exists as a piece of state on our component

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection />

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
