import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import homeImage from './images/home.png'
import WorkoutGeneratorScreen from './src/pages/WorkoutGenerationScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground style={{ height: '100%' }} source={homeImage}>
        <View style={{position:'absolute', bottom:0, height:'50%', display:'flex', flexDirection:'column', alignItems:'center', width:'100%'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('WorkoutGenerator')}}>
            <View style={{backgroundColor:'#FFF', margin:20, paddingHorizontal:60, paddingVertical:20, borderRadius:8}}>
              <Text>Generate Workout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialialRouteName = "Home">
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="WorkoutGenerator" component={WorkoutGeneratorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
