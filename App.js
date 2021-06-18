import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import AdvanceFormScreen from './screens/AdvanceFormScreen';
import BasicFormScreen from './screens/BasicFormScreen';
import UploadImageScreen from './screens/UploadImageScreen';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="UploadImageScreen" component={UploadImageScreen} />
            <Stack.Screen name="BasicFormScreen" component={BasicFormScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="AdvanceFormScreen" component={AdvanceFormScreen} />
        </Stack.Navigator>
    );
};

export default function App() {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
