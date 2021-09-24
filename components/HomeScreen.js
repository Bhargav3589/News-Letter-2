import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  ToastAndroid,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import db from '../Config';


export default class HomeScreen extends Component{
  constructor(){
    super();
    
    this.state={
      likes:0,
      dislikes:0,
      weather:'',
      liked:0,
    }
  }  

  componentDidMount(){
    var ref1 = db.ref('/').on('value',(data)=>{
      this.setState({likes:data.val().likes});
    })


    var ref2 = db.ref('/').on('value',(data)=>{
      this.setState({dislikes:data.val().dislikes});
    })
  }


  likes=()=>{
    if(this.state.liked!=1){
    var ref1=db.ref('/');
    ref1.on('value',(data)=>{
      this.setState({likes:data.val().likes});
    })
    this.setState({liked:1});

    db.ref('/').update({
      'likes':(this.state.likes+1)
    })
    }
  }

  dislikes=()=>{
    if(this.state.liked!=1){
    var ref2=db.ref('/');
    ref2.on('value',(data)=>{
    this.setState({dislikes:data.val().dislikes});
    })
    this.setState({liked:1});

    db.ref('/').update({
    'dislikes':(this.state.dislikes+1)
    })
    }


  }


  render(){
    return(
      <ScrollView>
        <ImageBackground source={require('../images.jpeg')} style={styles.img1}>

        <View style={styles.header}>
        <ImageBackground source={require('../download.jpeg')} style={{opacity:9}}>
          <Text style={styles.fontDecor}>News Letter</Text>
          </ImageBackground>
        </View>



        <View style={styles1.viewer}>
          <ImageBackground source={require('../Images/joyful-smiley-background-image-with-free-space-vector-1161963.jpg')} style={styles1.image}>
            <TouchableOpacity style={styles1.touchable}
              onPress={()=>this.props.navigation.navigate('Jokes')}
            >
              <Text style={styles1.buttons}>Jokes</Text>
              
            </TouchableOpacity>
          </ImageBackground>
          
          <ImageBackground source={require('../Images/news.jpg')}  style={styles1.image}>
            <TouchableOpacity style={styles1.touchable} 
            onPress={()=>this.props.navigation.navigate('News')}
            >
              <Text style={styles1.buttons}>News</Text>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground source={require('../Images/weather.jpg')}  style={styles1.image}>
            <TouchableOpacity style={styles1.touchable}
              onPress={()=>this.props.navigation.navigate('Weather')}
            >
              <Text style={styles1.buttons}>Weather</Text>
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground source={require('../Images/horoscope.jpg')}  style={styles1.image}>
            <TouchableOpacity style={styles1.touchable}
              onPress={()=>this.props.navigation.navigate('Horoscope')}
            >
              <Text style={styles1.buttons}>Horoscope</Text>
            </TouchableOpacity>
          </ImageBackground>

        </View>


        <View style={styles.viewer}>
          <Text style={styles.textDecor}>Rate Us</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {this.likes()}}>
              <Text  style={{paddingLeft:40}}>{this.state.likes}</Text>
              <Image style={styles.images} source={require('../thumbsup.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {this.dislikes()}}>
              <Text style={{paddingLeft:30}}>{this.state.dislikes}</Text>
              <Image style={styles.images} source={require('../thumbsdown.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  img1:{
    position:'relative',
    width:'100%',
    height:'100%',
  },
  header: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    width: Dimensions.get('window').width,
    alignItems: 'center',
    marginTop: 1,
  },
  fontDecor: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 100,
    margin: 10,
    backgroundColor: '#ffffff',
    width: 300,
    padding: 10,
  },
  textDecor: {
    color: 'black',
  },
  images: {
    width: 40,
    height: 40,
    margin: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles1=StyleSheet.create({
  viewer:{
    width:Dimensions.get('window').width,
  },
  image:{
    position:'relative',
    width:'100%',
  },
  touchable:{
    backgroundColor:"#212121",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    width:200,
    borderRadius:100,
    borderWidth:2,
    margin:40,
    borderColor:"#ffffff",
    padding:10,
  },
  buttons:{
    color:"#ffffff",
    fontSize:18,
    fontWeight:"bold",
  }
});
