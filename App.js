import React, {useState} from 'react';
import {Text, SectionList} from 'react-native';
import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';

import {Tasks} from "./src/components";

const DATA = [
        {
            title: "09 мая 2020",
            data: [
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '08:30',
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '05:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
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
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '08:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '07:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:30'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '06:00'
                },
                {
                    user: {
                        fullname: 'Вася Пупкин',
                        avatar: 'https://sun9-58.userapi.com/c846218/v846218416/efa93/PufoAu6mPwU.jpg?ava=1',
                    },
                    task: 'Заключить договор1',
                    time: '05:30'
                }
            ]
        }
    ]
;

export default function App() {
    const [scrollY, setScrollY] = useState(0)
    const [btnVisible, setbtnVisible] = useState(true)
    const handleScroll = (event) => {
        console.log(event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height);
        console.log(event.nativeEvent.contentSize.height);
        if (event.nativeEvent.contentOffset.y > scrollY && event.nativeEvent.contentOffset.y > 0) {
            setbtnVisible(false);
        } else {
            if (event.nativeEvent.contentOffset.y + event.nativeEvent.layoutMeasurement.height < event.nativeEvent.contentSize.height) setbtnVisible(true);
        }
        if (event.nativeEvent.contentOffset.y === 0) setbtnVisible(true);
        setScrollY(event.nativeEvent.contentOffset.y);
    };
    return (
        <Container>
            <Item>
                <SectionList
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Tasks {...item}/>}
                    renderSectionHeader={({section: {title}}) => (
                        <ItemTitle>
                            <Text>{title}</Text>
                        </ItemTitle>
                    )}
                />
                {btnVisible && <AddButton activeOpacity={0.5}>
                    <MaterialIcons name="add" size={34} color="white" />
                </AddButton>}
            </Item>
        </Container>

    );
}

const Container = styled.View`
    flex:1;
    `;


const Item = styled.View`
    margin-top: 50px;
`;

const ItemTitle = styled.Text`
    margin-bottom: 15px;
    font-size: 25px;
    background-color: white;
    font-weight: 700;
    padding: 0 20px;
`;

const AddButton = styled.TouchableOpacity`
    position:absolute;
    right: 30px;
    bottom: 30px;
    background-color: #28c75d;
    width: 60px;
    height: 60px;
    border-radius: 50px
    justify-content: center;
    align-items: center
`;

