import React from 'react';
import {View, Text, ImageBackground, StyleSheet, TouchableHighlight} from 'react-native';


class SignupScreen extends React.Component{

  static navigationOptions = {
    headerShown: false
  }
  render(){

    const backImage = require('../Assets/signIn.png') 
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={backImage} style={$.backgroundImage} >
          <View style={$.cover}>
            <View style={$.title}>
                <Text style={$.whitetitle} >HARD</Text>
                <Text style={$.greentitle}>ELEMENT</Text>
            </View>
            
            <View style={$.welcomeContainer}>
              <Text style={$.welcomeText1} >Sign in</Text>
              <Text style={$.welcomeText2}>train and live the new experience of</Text>
              <Text style={$.welcomeText2}>exercising at home</Text>
            </View>


            <TouchableHighlight style={$.loginButton} onPress = {()=>this.props.navigation.navigate('Login')}>
              <Text style={$.buttonText} >Login</Text>
            </TouchableHighlight>
            <TouchableHighlight style={$.signupButton} >
              <Text style={$.buttonText} >Sign up</Text>
            </TouchableHighlight>


        </View> 
        </ImageBackground>
      </View>
    );
  }
}

  export default SignupScreen;

  const $ = StyleSheet.create({
    cover : {
      flex: 1, width:'100%',backgroundColor : 'rgba(11,24,60,0.69)',height:'100%'
    },
    loginButton :{
      backgroundColor:"#40D876",
      height:53,
      width:'77%',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      alignSelf:'center',
      bottom : 161,
      position:'absolute'
    },
    buttonText :{
      fontSize:20,
      color:'#fff'
    },
    signupButton :{
      backgroundColor:"transparent",
      height:53,
      width:'77%',
      borderWidth:2,
      borderColor:"#fff",
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      alignSelf:'center',
      bottom : 89,
      position:'absolute'
    },
    backgroundImage : {
      flex : 1,
      resizeMode : "cover",
      justifyContent :"center",
      width:'100%',
      height:'100%'
    },
    title:{
      flexDirection:'row',
      marginTop:100,
      width:'50%',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center',
      alignSelf:'center'
    },
    greentitle:{
      fontSize:32,
      color:'#40D876',
      fontWeight:'bold'
    },
    whitetitle:{
      fontSize:32,
      color:'#fff',
      fontWeight:'bold'
    },
    welcomeContainer :{
      alignSelf:'center',
      justifyContent:'center'
,      alignContent:'center',
      width:'77%',
      height:'60%',

    },
    welcomeText1 :{
      fontSize:50,
      fontWeight:'bold',
      color:'#fff'
    },
    welcomeText2 :{
      fontSize:15,
      color:'#fff'
    },
  })
