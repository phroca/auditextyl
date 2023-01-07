import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, Text } from 'react-native';
import styled from 'styled-components/native';
import TracabiliteService from '../services/TracabiliteService'
import { formulaire } from "../models/formulaire";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;

const Container = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  color: #283c46;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const TracabiliteContent = styled.View`
  width: ${widthContent}px;
  align-items: center;
  align-self: center;
  justify-content: center;
  background: #dddddd;
  padding: 5px;
  border-radius: 5px; 
`;
const TracabiliteScreen = () => {
  const [tracabilite, setTracabilite] = useState(formulaire);

  useEffect(()=> {
    TracabiliteService.getListTracabilite().then((result)=> {
      if(result?.data) {
        setTracabilite(result?.data);
      }
    }).catch((error) => {
      console.error(error);
    })
  },[TracabiliteService])
    return (
        <Container>
            <StatusBar style="auto" />
            <SafeAreaView>
                <ScrollView style={{height: "100%"}} showsVerticalScrollIndicator={false}>
                    <TitleBar>
                      <Title>Traçabilité</Title>
                    </TitleBar>
                    <TracabiliteContent>
                      <Text>{tracabilite?.nom}</Text>
                      <Text>{tracabilite?.responsable}</Text>
                      <Text>{tracabilite?.destinataire}</Text>
                    </TracabiliteContent>
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default TracabiliteScreen;