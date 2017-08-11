import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPSnNA6RKKN3Eij_6BdMf9SXVfGM_wyf4',
      authDomain: 'auth-d530b.firebaseapp.com',
      databaseURL: 'https://auth-d530b.firebaseio.com',
      projectId: 'auth-d530b',
      storageBucket: 'auth-d530b.appspot.com',
      messagingSenderId: '93969974157',
    });
  };

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>AN APP!!!</Text>
      </View>
    );
  }
};

export default App;
