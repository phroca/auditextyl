import React, {  } from "react";
import { Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import styled from 'styled-components/native';
import { Auth } from 'aws-amplify';

const screenWidth = Dimensions.get('window').width;
const widthContent = screenWidth  - 50;

const Container = styled.ImageBackground`
  flex:1;
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


const ButtonAction = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ButtonView = styled.View`
  background: #1a9cd4;
  width: ${widthContent}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: bold;
`;
const ProfilScreen = ({navigation}) => {

  const disconnect = async() => {
    Auth.signOut().then(()=> {
      navigation.navigate("Signin");
    })
  }

    return (
        <Container>
        <SafeAreaView>
          <ScrollView style={{height: "100%"}} showsVerticalScrollIndicator={false}>
            <TitleBar>
                <Title>Profil</Title>
            </TitleBar>
          <ButtonAction>
            <TouchableOpacity onPress={()=> disconnect()}>
              <ButtonView>
                <ButtonText>Se déconnecter</ButtonText>
              </ButtonView>
            </TouchableOpacity>
          </ButtonAction>
          </ScrollView>
          </SafeAreaView>
        </Container>);
}

export default ProfilScreen;