import React from 'react';
import {View, Text} from 'react-native';


function SignupScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress = {()=> props.navigation.navigate('HomeTrain')}>Signup Screen</Text>
      </View>
    );
  }

  export default SignupScreen;