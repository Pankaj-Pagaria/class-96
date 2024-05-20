import React from 'react';
import {View} from 'react-native';
import Home from './screens/home'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Mercury from './screens/mercury';
import Venus from './screens/venus';
import Mars from './screens/mars';
import Earth from './screens/earth';
import Jupiter from './screens/jupiter';
import Saturn from './screens/saturn';
import Uranus from './screens/uranus';
import Neptune from './screens/neptune';

const Stack = createStackNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Mercury" component={Mercury}/>
          <Stack.Screen name="Venus" component={Venus}/>
          <Stack.Screen name="Mars" component={Mars}/>
          <Stack.Screen name="Earth" component={Earth}/>
          <Stack.Screen name="Jupiter" component={Jupiter}/>
          <Stack.Screen name="Saturn" component={Saturn}/>
          <Stack.Screen name="Uranus" component={Uranus}/>
          <Stack.Screen name="Neptune" component={Neptune}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
    
  }
}