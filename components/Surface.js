import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const  Surface = props => {
    return(
            <Container>
                <Cover>
                    <Image source={{uri: props.Image,}}  />
                </Cover>
                <ContainerCaption>
                    <Caption>{props.Libelle}</Caption>
                </ContainerCaption>
            </Container>
    )
}
export default Surface;

const ContainerCaption = styled.View`
    justify-content :center;
    align-items: center;
    height: 70px;
    border-bottom-left-radius : 10px;
    border-bottom-right-radius : 10px;
`;

const Container = styled.View`
    height: 250px;
    width: 295px;
    background-color: #1A9CD4;
    border-radius: 10px;
    margin-top : 15px;
    margin-bottom: 15px;
`;

const Cover = styled.View`
    height: 180px;
    width:  295px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const Caption = styled.Text`
    font-size : 25px;
    text-align: center;
    color: white;
`;

const Image = styled.Image`
    width: 100%;
    height: 180px;
    background: blue;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: absolute;
`;

