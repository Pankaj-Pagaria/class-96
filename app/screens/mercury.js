import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Mercury extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress = {()=>{this.props.navigation.navigate('Home')}}
          >
            <Image
              style={styles.arrow}
              source={require('../planets/back-arrow-icon-isolated-premium-black-round-button-abstract-illustration-back-arrow-icon-premium-black-round-button-99525841-removebg-preview.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.appTitle}>MERCURY</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/mercury-messenger-globe-pia15162-removebg-preview.png')}
          />
        </View>
        <Text style={styles.text}>Mercury is the smallest planet in the solar system, and it is also the planet closest to the Sun, making it the most difficult of the planets to see with the unaided eye. Because its rising or setting is always within about two hours of the Sun's, Mercury is never observable when the sky is fully dark.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#93adc7'
  },

  appTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 0,
    fontWeight: 'bold',
    color: 'white'
  },

  image: {
    width: 250,
    flex: 0.5,
    height: 250,
    alignSelf: 'center',
    marginTop: 5,
  },

  text: {
    fontSize: 15.6,
    marginTop: 5,
    backgroundColor: '#53606e',
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    borderRadius: 10,
    padding: 5
  },

  arrow: {
    height: 30,
    width:30,
    
  }
  
});