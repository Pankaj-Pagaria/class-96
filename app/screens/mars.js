import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Mars extends React.Component{
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
          <Text style={styles.appTitle}>MARS</Text>
        </View>
        <View>
        <Image
          style={styles.image}
          source={require('../planets/mars-removebg-preview.png')}
        />
        </View>
        <View>
          <Text style={styles.text}>Mars is the fourth planet from the Sun and the next planet beyond Earth. It is, on average, more than 142 million miles from the Sun. Mars turns on its axis more slowly than Earth does. So, a day on Mars is 24.6 hours</Text>
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
    marginTop: 5,
  },

  text: {
    fontSize: 18,
    marginTop: 10,
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