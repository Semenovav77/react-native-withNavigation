import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

import {Button} from './../components';

const PersonScreen = ({route, navigation}) => {
    const { user } = route.params;
    return (
        <Container>
            <PersonFullName>{user.fullname}</PersonFullName>
            <GrayText> {user.phone}</GrayText>
            <PhoneButton>
                <Button>
                    Позвонить
                </Button>
               {/* <Button background={'blue'}>
                    Позвонить
                </Button>*/}
            </PhoneButton>
        </Container>

    );
};

const C = styled(Button)`
    background: #fff
`;

const PhoneButton = styled.View`
    margin-top: 25px;

`;

const PersonFullName = styled.Text`
   font-weight: 700;
   font-size: 26px;
   margin-bottom: 4px         
`;
const GrayText = styled.Text`
   color: #8b979f;     
`;

const Container = styled.View`
 padding: 10px 20px;
`;

export default PersonScreen;