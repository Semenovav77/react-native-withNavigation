import React, {useReducer, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, PersonScreen} from "./src/screens";
import {ContextApp, initialState, reducer} from "./src/reducer/reducer";
import {tasksAPI} from './src/api/api';

const Stack = createStackNavigator();

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        tasksAPI.getTasks().then((data) => {
            dispatch({
                type: 'test_update',
                payload: data
            })
        })
    },[]);
    return (
        <ContextApp.Provider value={{dispatch, state}}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: '#168ad1',
                headerTitleStyle: {
                    fontWeight: '500',
                    fontSize: 22
                },
            }}>
                <Stack.Screen name="Home" options={{ title: 'Список встреч'}}>
                    {props => <HomeScreen {...props} DATA={state} />}
                </Stack.Screen>
                <Stack.Screen name="Person" options={{ title: 'Карточка'}} component={PersonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        </ContextApp.Provider>
    );
}

