
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-web";


const  ValiderTrue = () => {
    return(
            <Button>
                <Title>Valider</Title>
                <Ionicons name="arrow-forward-circle-outline" size={60} color="white"></Ionicons>
            </Button>
    )
}

export default ValiderTrue

const Button = styled.View`
    height: 70px;
    width: 200px;
    background: #1A9CD4;
    border-radius: 10px;
    margin-top : 30px;
    margin-bottom : 30px;
    margin-right: 30px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.Text`
    margin-left: 30px;
    color: white;
    font-size : 25px;
`;