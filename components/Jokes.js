import React,{Component} from 'react';
import {ScrollView,View,Text,StyleSheet,Dimensions,Button,ImageBackground} from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default class HomeScreen extends Component{
  render(){
    return(
      <ScrollView>  

          <View style={styles.header}>
        <ImageBackground source={require('../Images/joyful-smiley-background-image-with-free-space-vector-1161963.jpg')} style={styles.img}>
          <Text style={styles.fontDecor}>News Letter</Text>
          </ImageBackground>
        </View>
        
        <Text>Welcome to Jokes Screen</Text>

        <Button title="Navigate to Home Screen" onPress={()=>{this.props.navigation.navigate("HomeScreen")}}></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: 10,
  },
  fontDecor: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  img:{
    position:'relative',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  }
});