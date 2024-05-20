import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

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
          <Text style={styles.appTitle}>EARTH</Text>
        </View>
        <View>
          <Image
            style={styles.image}
            source={require('../planets/earth-removebg-preview.png')}
          />
        </View>
        <View>
          <Text style={styles.text}>Earth is the 3rd planet from the Sun, and it has one Moon. It is the only planet in our Solar System which is suitable for sustaining life. The composition of the Earth's surface is 70% water and only 30% land. Water bodies such as oceans, rivers, lakes, glaciers and seas make up 70% of the water content on Earth</Text>
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
    fontSize: 15.2,
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