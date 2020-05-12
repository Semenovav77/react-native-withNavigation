import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeScreen, PersonScreen} from "./src/screens";

const DATA = [
        {
            title: "09 мая 2020",
            data: [
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '08:30',
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '05:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '05:30'
                }
            ]
        },
        {
            title: "11 мая 2020",
            data: [
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '08:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        phone: '8 (999) 000-11-22',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '05:30'
                }
            ]
        }
    ]
;

const Stack = createStackNavigator();

export default function App() {
    return (
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
                    {props => <HomeScreen {...props} DATA={DATA} />}
                </Stack.Screen>
                <Stack.Screen name="Person" options={{ title: 'Карточка'}} component={PersonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

