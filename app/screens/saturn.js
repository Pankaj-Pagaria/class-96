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
          <Text style={styles.appTitle}>SATURN</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/images-removebg-preview.png')}
          />
        </View>
        <Text style={styles.text}>Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's.</Text>
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
    fontSize: 16,
    marginTop: 20,
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