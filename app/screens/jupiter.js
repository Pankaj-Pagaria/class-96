import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Earth extends React.Component{
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
          <Text style={styles.appTitle}>JUPITER</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/jupiter-removebg-preview.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>Jupiter is called a gas giant planet. Its atmosphere is made up of mostly hydrogen gas and helium gas, like the sun. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes.</Text>
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
    marginTop: 10,
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