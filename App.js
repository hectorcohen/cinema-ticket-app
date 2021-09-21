import React from 'react'
import Signup from "./src/screens/SIgnup";
import store from './src/store/index'
import {Provider} from "react-redux";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from "./src/screens/Movies";



const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <Provider store={store} >
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name={'Signup'} component={Signup} />
                    <Stack.Screen name={'Movies'} component={Movies} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}