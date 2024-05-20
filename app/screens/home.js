import React from 'react';
import {View, TouchableOpacity, Text, ImageBackground, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView}from 'react-native';

export default class Home extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage}
          source={require('../solarSystem.jpg')}
        >
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Planets</Text>
          </View>
          <ScrollView>
            <TouchableOpacity 
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Mercury')}}
            >
              <Text style={styles.routeText}>Mercury</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Venus')}}>
              <Text style={styles.routeText}>Venus</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.routeCard}
            onPress={()=>{this.props.navigation.navigate('Mars')}}
            >
              <Text style={styles.routeText}>Mars</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Earth')}}
            >
              <Text style={styles.routeText}>Earth</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Jupiter')}}
            >
              <Text style={styles.routeText}>Jupiter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Saturn')}}
            >
              <Text style={styles.routeText}>Saturn</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Uranus')}}>            
              <Text style={styles.routeText}>Uranus</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.routeCard}
              onPress={()=>{this.props.navigation.navigate('Neptune')}}
            >
              <Text style={styles.routeText}>Neptune</Text>
            </TouchableOpacity>
          </ScrollView>
        
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: 335,
        height: 870
    },
    routeCard: {
        flex: 0.5,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 25,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginTop: 20
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: -10,
        padding: 30,
        marginLeft: 50
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 100,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 150,
        width: 150,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});