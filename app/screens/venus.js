import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Venus extends React.Component{
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
          <Text style={styles.appTitle}>VENUS</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/venus-removebg-preview.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>Venus is a terrestrial planet because it has a solid, rocky surface like other planets in the inner Solar System. Astronomers have known Venus for thousands of years. The ancient Romans named it after their goddess Venus, goddess of love and beauty. Venus is the brightest thing in the night sky except for the Moon.</Text>
        </View>
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
    marginTop: 0,
  },

  text: {
    fontSize: 15,
    marginTop: 6,
    backgroundColor: '#53606e',
    marginLeft: 10,
    marginRight: 10,
    color: 'white',
    marginBottom: 10,
    borderRadius: 10,
    padding: 5
  },

  arrow: {
    height: 30,
    width:30,
    
  }
  
  
});