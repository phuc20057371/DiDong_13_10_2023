import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RightOutlined from '@ant-design/icons/RightOutlined';
import HomeScreen  from './src/HomeScreen';
import DestailsScreen from './src/DetailsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        //          options={{ title: 'Overview' }}
        />
        <Stack.Screen
          name="Details"
          component={DestailsScreen}
          options={{ title: 'Overview' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;