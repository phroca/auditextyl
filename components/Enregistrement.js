
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
const  Enregistrement = props => {

    const verify = () => {
        console.log(props.Numero)
        alert("Voulez vous supprimer l'enregistrement numéro " + props.Numero+  " ?");
    }

    return(
            <Container>
                <Caption>
                    {props.Numero} {props.Libelle}
                </Caption>
                <TouchableOpacity onPress={()=> verify()}>
                <Logo>
                    <Ionicons name="trash-outline" size={60} color="white"/>
                </Logo>
                </TouchableOpacity>

            </Container>
    )
}

export default Enregistrement

const Container = styled.View`
  height: 100px;
  width: 560px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
`;

const Caption = styled.Text`
  margin: auto;
  font-weight: 400;
  font-size: 25px;
  color: black;
  margin-left: 30px;
`;

const Logo = styled.View`
    background: red;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
`;
