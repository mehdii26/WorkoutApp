import React from 'react';
import {View, Text,ImageBackground, StyleSheet,TouchableHighlight} from 'react-native';


class  SignupScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  }
  render(){
  var background = require('../Assets/backgroundSignup.png')  
  return (
      <View style={$.container}>
        <ImageBackground source={background} style={$.backgroundImage}>
          <View style={$.cover}>
            <View style={$.title}>
                <Text style={$.whitetitle} >HARD</Text>
                <Text style={$.greentitle}>ELEMENT</Text>
            </View>
            
            <View style={$.welcomeContainer}>
              <Text style={$.welcomeText1} >Welcome</Text>
              <Text style={$.welcomeText2}>train and live the new experience of</Text>
              <Text style={$.welcomeText2}>exercising at home</Text>
            </View>
            

            <TouchableHighlight style={$.tryButton}>
                <Text style={$.tryButtonText} >Try Now</Text>
            </TouchableHighlight>
            
            <TouchableHighlight style={$.loginButton}>
                <Text style={$.tryButtonText} >Login</Text>
            </TouchableHighlight>

            <Text style={$.changeLang} >Change Language</Text>
          </View>
        </ImageBackground>
      </View>
    );}
  }

  const $ = StyleSheet.create({
    container :{
      flex: 1, width:'100%',height:'100%'
    },
    backgroundImage : {
      flex : 1,
      resizeMode : "cover",
      justifyContent :"center",
      width:'100%',
      height:'100%'
    },
    cover : {
      flex: 1, width:'100%',backgroundColor : 'rgba(11,24,60,0.69)',height:'100%'
    },
    tryButton :{
      backgroundColor:"#40D876",
      height:53,
      width:'77%',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      alignSelf:'center',
      bottom : 191,
      position:'absolute'
    },
    loginButton :{
      backgroundColor:"transparent",
      height:53,
      width:'77%',
      alignContent:'center',
      alignItems:'center',
      justifyContent:'center',
      borderRadius:100,
      alignSelf:'center',
      bottom : 118,
      position:'absolute',
      borderWidth: 3,
      borderColor:'#fff'
    },
    tryButtonText :{
      fontSize:20,
      color:'#fff'
    },
    changeLang:{
      fontSize:13,
      color:'#40D876',
      position:'absolute',
      alignSelf:'center',
      bottom:38
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
      height:'55%',

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
  export default SignupScreen;