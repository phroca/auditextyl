import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

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
const TracabiliteScreen = () => {
    return (
        <Container>
            <StatusBar style="auto" />
            <SafeAreaView>
                <ScrollView style={{height: "100%"}} showsVerticalScrollIndicator={false}>
                    <TitleBar>
                      <Title>Traçabilité</Title>
                    </TitleBar>
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}

export default TracabiliteScreen;