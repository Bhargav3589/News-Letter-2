import React, { Component } from 'react';

import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      weather: '',
      city: 'Kolkata',
    };
  }

  getWeather = async (city) => {
    var resp = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        city +
        '&units=metric&appid=87fbfe95851e50728bbf09a25620f2d7'
    );

    this.setState({ weather: await resp.json() });
  };

  getImage=(isCloudy)=>{
    if(isCloudy=="Haze")
    return (<Image
            source={require("../assets/Sunny.jpg")}
            style={styles.weather}
          />);
    else if(isCloudy=="Rain") 
      return (<Image
            source={require("../assets/Rainy.jpg")}
            style={styles.weather}
          />);
    else if(isCloudy=="Thunderstorm")
      return(<Image
            source={require("../assets/Thunderstorm.jpg")}
            style={styles.weather}
          />);
    else  
      return (<Image
            source={require("../assets/MostlySunny.jpg")}
            style={styles.weather}
          />);
  }

  componentDidMount() {
    this.getWeather('kolkata');
  }

  render() {
    if (this.state.weather == '') {
      return (
        <View styles={styles.viewer}>
          <TouchableOpacity>
            <TextInput
              style={styles.textInp}
              onChangeText={(val) => {
                this.setState({ city: val });
              }}
              value={this.state.city}></TextInput>
          </TouchableOpacity>

          <Text>No Fetching</Text>
        </View>
      );
    } else {
      return (
        <View styles={styles.viewer}>
          <TouchableOpacity>
            <TextInput
              style={styles.textInp}
              onChangeText={(val) => {
                this.setState({ city: val });
              }}
              placeholder="Enter Correct City Name"
              value={this.state.city}></TextInput>
            <TouchableOpacity
              style={styles.touchOp}
              onPress={() => {
                this.getWeather(this.state.city);
              }}>
              <Text style={styles.textSrch}>Search</Text>
            </TouchableOpacity>
          </TouchableOpacity>


          <View style={styles.info}>
              {this.getImage(this.state.weather.weather[0].main)}

              <Text style={styles.weatherText}>
                Weather:{this.state.weather.weather[0].main}
              </Text>
              <Text style={styles.weatherText}>
                Temperature:{this.state.weather.main.temp}
              </Text>
              <Text style={styles.weatherText}>
                City:{this.state.city}
              </Text>
              <Text style={styles.weatherText}>
                Humidity:{this.state.weather.main.humidity} g/m3
              </Text>
              <Text style={styles.weatherText}>
                Pressure:{this.state.weather.main.pressure} mBar
              </Text>
          </View>


          <TouchableOpacity  style={styles.navig} onPress={()=>{this.props.navigation.navigate("HomeScreen")}}>
            <Text style={styles.textNavig}>Navigate To Screen</Text>
          </TouchableOpacity>


        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  viewer: {
    margin: 10,
    backgroundColor: "#212121",
  },
  textInp: {
    width: Dimensions.get('window').width,
    borderWidth: 1,
    marginTop: 20,
    borderColor: 'red',
    borderRadius: 100,
    padding: 10,
    position: 'absolute',
  },
  touchOp: {
    marginLeft: Dimensions.get('window').width - 120,
    width: 100,
    marginTop: 30,
    height:80,
  },
  textSrch: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 100,
    padding: 2,
    textAlign: 'center',
    backgroundColor:"#212121",
    color:"white",
    borderColor:"red",
  },
  weatherText: {
    position: 'relative',
    marginTop: 5,
    fontSize:20,
    fontFamily:'consolas',
    alignSelf:'center',
  },
  weather: {
    marginTop: 40,
    borderRadius: 200,
    width: 100,
    height: 100,
    alignSelf:'center',
  },
  info:{
    backgroundColor:"#ffaaed",
    width:Dimensions.get('window').width-50,
    marginLeft:20,
    marginTop:20,
    borderRadius:20,
  },
  navig:{
    backgroundColor:"#212121",
    
    borderColor:"blue",
    fontSize:20,
    width:160,
    height:40,
    borderRadius:20,
    textAlign:"center",
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginTop:100,
  },
  textNavig:{
    color:"white",
  }

});
