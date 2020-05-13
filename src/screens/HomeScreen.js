import React, {useState} from 'react';
import {Text, SectionList, View} from 'react-native';
import styled from 'styled-components/native';
import {MaterialIcons} from '@expo/vector-icons';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade,
    Loader,
    Shine,
    ShineOverlay,
} from 'rn-placeholder';

import {Tasks} from "./../components";

const HomeScreen = ({DATA, navigation, isLoading}) => {
    const [scrollY, setScrollY] = useState(0);
    const [btnVisible, setbtnVisible] = useState(true);
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
    const arrPlaceholder = Array(10).fill(1);
    if (isLoading) {
        return (
            <PlaceholderColor>
                {arrPlaceholder.map((item, index) => {
                    return (
                            <ItemPlaceholder key={index}
                                Left={props => (
                                    <PlaceholderMedia
                                        isRound={true}
                                        style={[{marginRight: 10}, props.style]}
                                    />
                                )}
                                Animation={ShineOverlay}
                            >
                                <PlaceholderLine width={50}/>
                                <PlaceholderLine width={75}/>
                            </ItemPlaceholder>
                    )
                })}

            </PlaceholderColor>
        )
    }
    ;
    return (
        <Container>
            <Item>

                <SectionList
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Tasks navigation={navigation} {...item}/>}
                    renderSectionHeader={({section: {title}}) => (
                        <ItemTitle>
                            <Text>{title}</Text>
                        </ItemTitle>
                    )}
                />
                {btnVisible && <AddButton activeOpacity={0.5}>
                    <MaterialIcons name="add" size={34} color="white"/>

                </AddButton>}

            </Item>
        </Container>
    );
};

export default HomeScreen;

const Container = styled.View`
    flex:1;
    background: white
    `;


const Item = styled.View`
`;

const ItemTitle = styled.Text`
    margin-top:20px;
    margin-bottom: 15px;
    font-size: 20px;
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

const PlaceholderColor = styled.View`
    flex:1;
    background: white;
    padding: 25px 25px
`;

const ItemPlaceholder = styled(Placeholder)`
    margin-bottom:15px
`;
