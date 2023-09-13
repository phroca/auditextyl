import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import TracabiliteService from '../../services/TracabiliteService'
import { formulaire } from "../../models/formulaire";
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";
import Utilisateur from "../../components/Utilisateur";
import ValiderTrue from "../../components/ValiderTrue";
import { useDispatch } from 'react-redux';
import { setVisiteur } from "../../reducers/visiteurReducer";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;


const MenuUtilisateur = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [tracabilite, setTracabilite] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const user = await Auth.currentAuthenticatedUser();
      setUsername(user?.attributes?.given_name);
    })();
  }, []);

  useEffect(() => {
    TracabiliteService.getListUsers().then((result) => {
      if (result?.data) {
        setTracabilite(result?.data);
      }
    }).catch((error) => {
      console.error(error);
    })
  }, []);


  const handleVisiteurPress = (visiteur) => {
    dispatch(setVisiteur(visiteur.Id, visiteur.Nom, visiteur.Prenom, visiteur.Avatar, visiteur.animal, visiteur.Signature));
    NavValider();
  };

  const NavAnnuler = () => {
    navigation.navigate("tracabilteHome");
  }

  const NavAjoutUtilisateur = () => {
    navigation.navigate("AjoutUtilisateur");
  }

  const NavValider = () => {
    navigation.navigate("MenuEnregistrement");
  }

  return (
    <Container>
      <ContainerContent>
        <SafeAreaView>
          <Profile>
            <Wrapper>
              <Img></Img>
              <Name>{username}</Name>
            </Wrapper>
            <TouchableOpacity onPress={NavAnnuler}>
              <Annuler />
            </TouchableOpacity>
          </Profile>
          <ContainerGrey>
            <ContainerWhite>
              <TouchableOpacity onPress={NavAjoutUtilisateur}>
                <ContainerButtonAdd>
                  <Title>Ajouter un utilisateur</Title>
                  <Ionicons name="add-circle-outline" size={60} color="white" />
                </ContainerButtonAdd>
              </TouchableOpacity>
              <Text>Choisir un utilisateur existant</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <ContainerList>
                  {tracabilite.map((visiteur) => (
                    <TouchableOpacity
                      key={visiteur.Id}
                      onPress={() => handleVisiteurPress(visiteur)}
                    >
                      <Utilisateur
                        key={visiteur.Id}
                        Avatar={visiteur.Avatar}
                        Nom={visiteur.Nom}
                        Prenom={visiteur.Prenom}
                        animal={visiteur.animal}
                        Signature={visiteur.Signature}
                      />
                    </TouchableOpacity>
                  ))}
                </ContainerList>
              </ScrollView>
            </ContainerWhite>
          </ContainerGrey>
        </SafeAreaView>
      </ContainerContent>
    </Container>
  );
}

export default MenuUtilisateur;

const ContainerValidation = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const ContainerList = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Profile = styled.View`
  width: 740px;
  height: 160px;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-weight: 400;
  font-size: 30px;
  color: black;
  margin-left: 30px;
`;

const Img = styled.Image`
  box-sizing: border-box;
  background: blue;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-left: 30px;
  border: 6px solid #1A9CD4;
`;

const Name = styled.Text`
  margin-left: 25px;
  font-weight: 400;
  font-size: 40px;
  color: #1A9CD4;
`;

const Container = styled.View`
  position: relative;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
  background: #1A9CD4;
`;

const ContainerContent = styled.View`
  width: 740px;
  height: 1120px;
  margin-left: 30px;
  margin-top: 30px;
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 10px;
`;

const ContainerGrey = styled.View`
  height: 930px;
  width: 680px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-bottom: 30px;
  margin-left: 30px;
  box-sizing: border-box;
`;

const ContainerWhite = styled.View`
  height: 870px;
  width: 620px;
  background: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const ContainerButtonAdd = styled.View`
  height: 100px;
  width: 560px;
  background: #1A9CD4;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  padding-right: 20px;
`;

const Title = styled.Text`
  margin: auto;
  font-weight: 400;
  font-size: 25px;
  color: white;
  margin-left: 30px;
`;
