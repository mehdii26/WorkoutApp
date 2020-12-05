import React from 'react';
import {View, Text} from 'react-native';


function WelcomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={()=> props.navigation.navigate('Signup')}>Welcome Screen</Text>
      </View>
    );
  }

  export default WelcomeScreen;