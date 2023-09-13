import React from "react";
import { Dimensions, Text, TouchableOpacity, StyleSheet } from "react-native";
import styled from 'styled-components/native';
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from 'react-redux';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const MenuEnregistrement = ({ navigation }) => {
  const visiteur = useSelector(state => state.visiteur);
  const nomVisiteur = visiteur.nom;
  const prenomVisiteur = visiteur.prenom;
  const avatarVisiteur = visiteur.avatar;
  const animalVisiteur = visiteur.animal;
  const IdVisiteur = visiteur.id;
  const signatureVisiteur = visiteur.signature

  const NavUtilisateur = () => {
    navigation.navigate("MenuUtilisateur");
  };

  const NavEnregistrement = () => {
    navigation.navigate("FormEnregistrement");
  };

  return (
    <Container>
      <Profile>
        <Cover>
            <Img source={{uri: avatarVisiteur}}/>
        </Cover>
        <Name>{prenomVisiteur} {nomVisiteur}</Name>
      </Profile>
      <ButtonList>
        <TouchableOpacity onPress={() => NavUtilisateur()}>
          <ButtonBack>
            <Ionicons name="arrow-back-outline" size={60} color="#1A9CD4"></Ionicons>
            <CaptionBack>Changer d'Utilisateur</CaptionBack>
          </ButtonBack>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavEnregistrement()}>
          <ButtonEnregistrement>
            <Ionicons name="add-circle-outline" size={90} color="white"></Ionicons>
            <CaptionEregistrement>Enregistrements Journal RABC</CaptionEregistrement>
          </ButtonEnregistrement>
        </TouchableOpacity>
      </ButtonList>
    </Container>
  );
};

export default MenuEnregistrement;

const ButtonEnregistrement = styled.View`
    height: 150px;
    width: 600px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 6px solid #FFFFFF;   
`;


const ButtonBack = styled.View`
    height: 70px;
    width: 400px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    background-color: white;
    margin-bottom: 30px;
`;

const CaptionBack = styled.Text`
    font-size: 30px;
    color: #1A9CD4;
`;

const CaptionEregistrement = styled.Text`
    font-size: 30px;
    color: white;
`;

const Container = styled.View`
position: relative;
width: ${screenWidth}px;
height: ${screenHeight}px;
background: #1A9CD4;
align-items: center;
`;

const Profile = styled.View`
    margin-top: 100px;
`;

const Cover = styled.View`
    width: 400px;
    height: 400px;
    border-radius: 200px;
    overflow : hidden;
    border: 6px solid #FFFFFF;
`;

const Img = styled.Image`

width: 100%;
    height: 400px;
    background: blue;
    position: absolute;
    top: 0;
    left : 0;
`;

const Name = styled.Text`
  font-weight: 400;
  font-size: 50px;
  color: #FFFFFF;
  text-align: center;
  margin-top: 10px;
`;

const ButtonList = styled.View`
    margin-top : 20px;
    align-items: center;
`;