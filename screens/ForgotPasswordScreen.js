import React, { useState } from "react";
import { TouchableOpacity, Dimensions } from "react-native";
import styled from "styled-components/native";
import Toast from 'react-native-toast-message';
import { Auth } from 'aws-amplify';
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 80;

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FCFCFC;
  align-items: center;
`;

const ImageBG = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TextInput = styled.TextInput`
  border: 1px solid #dddddd;
  width: ${widthContent}px;
  height: 44px;
  border-radius: 10px;
  font-size: 17px;
  color: #283c46;
  padding-left: 120px;
  margin-top: 20px;
  background: #FFFFFF;
  z-index: 1;
`;

const ConfirmationForm = styled.View`
  align-items: center;
  margin-top: 50px;
`;

const Logo = styled.Image`
  width: 180px;
  height: 44px;
  margin-top: 50px;
`;

const TitleBar = styled.View`
  justify-content: center;
  align-items: center;

  margin-bottom: 30px;
`;

const CloseButton = styled.View`
  width: ${widthContent}px;
  justify-content: flex-start;
`;

const Title = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
  width: 275px;
  color: #283c46;
  text-align: left;
`;

const SubTitle = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  width: 275px;
  color: #62666A;
  text-align: left;
`;

const ButtonView = styled.View`
  background: #1a9cd4;
  width: ${widthContent}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonViewSecondary = styled.View`
  background: #131516;
  width: ${widthContent}px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 10px 20px #c2cbff;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 14px;
`;

const ButtonViewLink = styled.View`
  background: transparent;
  width: ${widthContent}px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const ButtonTextLink = styled.Text`
  color: #5263ff;
  text-decoration: underline;
  font-size: 16px;
`;

const PreText = styled.Text`
color: #283c46;
  width: 100px;
  height: 24px;
  font-weight: bold;
  font-size: 14px;
  position: absolute;
  top: 30px;
  left: 10px;
  z-index: 2;
`;

const InputContainer = styled.View`
    position: relative;
`



const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState("");

    async function handleConfirmForgotPassword() {
        try {
          await Auth.forgotPassword(email);
          Toast.show({
            type: 'success',
            text1: 'Envoi du code de confirmation',
            text2:  "Un mail vous a été envoyé avec un code pour le mot de passe."
          });
          navigation.navigate("Changement Mdp");
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

return (
    <Container>
    <ConfirmationForm>
    <TitleBar>
        <CloseButton>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#283c46" />
            </TouchableOpacity>
        </CloseButton>
        <Title>Oubli du mot de passe</Title>
      </TitleBar>
      <InputContainer>
            <PreText>adresse email</PreText>
            <TextInput onChangeText={(e)=> setEmail(e)}/>
        </InputContainer>
      <TouchableOpacity onPress={()=> handleConfirmForgotPassword()}>
            <ButtonView>
              <ButtonText>Confirmer</ButtonText>
            </ButtonView>
        </TouchableOpacity>
    </ConfirmationForm>
  </Container>
)
}

export default ForgotPasswordScreen;