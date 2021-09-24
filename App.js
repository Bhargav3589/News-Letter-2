import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Weather from './components/Weather';
import Jokes from './components/Jokes';
import News from './components/News';
import Horoscope from './components/Horoscope';
import HomeScreen from './components/HomeScreen';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';



export default class App extends Component{
  render(){
    return(
      <View>
        <AppContainer/>

      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  Weather : Weather,
  News : News,
  Jokes : Jokes,
  Horoscope: Horoscope,
})

const AppContainer = createAppContainer(AppNavigator);