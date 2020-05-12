import React from 'react';
import styled from "styled-components/native";

const Tasks = ({user, task, time, navigation}) => {
    return (
        <ItemInfo onPress={() => navigation.navigate('Person', {user})}>
            <Avatar
                source={{
                    uri: user.avatar,
                }}/>
            <ItemInfoBlock>
                <FullName>{user.fullname}</FullName>
                <Task>{task}</Task>
            </ItemInfoBlock>
            <BlockTime >
                <Time >{time}</Time>
            </BlockTime>
        </ItemInfo>
    );
};

export default Tasks;

const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 16px;
`;
const ItemInfoBlock = styled.View`
    flex: 1;  
`;
const FullName = styled.Text`
    font-size: 18px
`;
const Task = styled.Text`
    opacity: 0.4
    font-size: 14px
`;
const Time = styled.Text`
    font-size: 18px;
    color: ${props => props.primary ? 'white' : '#45b0d1'} 
`;
const BlockTime = styled.View`
    background: ${props => props.primary ? '#005bd1' : '#e9f5ff'};
    font-weight: 600
    padding: 5px 15px;
    border-radius: 15px
`;
const ItemInfo = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    border-bottom-width: 1px 
    border-bottom-color: #f3f3f3;
    padding: 20px 20px
`;
