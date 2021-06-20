import React from 'react';
import { ThemeProvider } from 'react-native-elements';
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
            <Stack.Screen
                name="UploadImageScreen"
                component={UploadImageScreen}
                options={{ title: ' ' }}
                />
            <Stack.Screen
                name="BasicFormScreen"
                component={BasicFormScreen}
                options={{ title: ' ' }}/>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: ' ' }}/>
            <Stack.Screen
                name="AdvanceFormScreen"
                component={AdvanceFormScreen}
                options={{ title: ' ' }}/>
        </Stack.Navigator>
    );
};

export default function App() {
  return (
      <ThemeProvider>
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
      </ThemeProvider>
  );
}
