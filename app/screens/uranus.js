import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default class Mercury extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate('Home')}}
          >
            <Image
              style={styles.arrow}
              source={require('../planets/back-arrow-icon-isolated-premium-black-round-button-abstract-illustration-back-arrow-icon-premium-black-round-button-99525841-removebg-preview.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.appTitle}>URANUS</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/p0257vk5-removebg-preview.png')}
          />
        </View>
        <Text style={styles.text}>Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.</Text>
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
    width: 310,
    flex: 0.5,
    height: 250,
    alignSelf: 'center',
    marginTop: 10,
  },

  text: {
    fontSize: 16,
    marginTop: 10,
    backgroundColor: '#53606e',
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    borderRadius: 10,
    padding: 5,
  },
  arrow: {
    height: 30,
    width:30,
    
  }
  
});