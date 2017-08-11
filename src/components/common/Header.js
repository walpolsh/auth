//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//destructured import ^^

//make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  //destructured import ^^

  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{props.headerText}</Text>
    </View>
  );
};

//^^view tag is like a wrapping box for the, positions it correctly on the screen

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
};

//^^ justifyContent adjusts vertically ('center' = middle from top left)
//^^ alignItems adjusts horizontally ('center' = middle from left)
// shadow
//make the component available

export { Header };
