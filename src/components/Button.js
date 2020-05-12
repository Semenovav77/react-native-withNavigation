import React from 'react';
import {View} from 'react-native';
import styled from "styled-components/native/dist/styled-components.native.esm";

const Button = ({children, background}) => {
    return (
        <ButtonLayout background={background}>
            <ButtonText>{children}</ButtonText>
        </ButtonLayout>
    );
};

export default Button;

Button.defaultProps = {
 background: '#28c75d'
};

const ButtonLayout = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    height: 35px;
    background: ${props => props.background}
`;
const ButtonText = styled.Text`
    color: white;
    font-size: 18px;
 `;