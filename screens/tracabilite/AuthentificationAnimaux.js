import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, 
         SafeAreaView, 
         ScrollView, 
         TouchableOpacity, 
         TouchableWithoutFeedback, 
         Pressable,
         StyleSheet,
         Modal,
         View,
         Text
        } from 'react-native';
import styled from 'styled-components/native';
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";
import TracabiliteService from '../../services/TracabiliteService'
import Animaux from "../../components/Animaux";
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;

const AuthentificationAnimaux = ({navigation}) => {

  //
  const id_Admin = 1;

  //visiteur
  const visiteur = useSelector(state => state.visiteur);
  const nomVisiteur = visiteur.nom;
  const prenomVisiteur = visiteur.prenom;
  const avatarVisiteur = visiteur.avatar;
  const animalVisiteur = visiteur.animal;
  const IdVisiteur = visiteur.id;
  //formulaire
  const form = useSelector(state => state.form);
  const idForm ="";
  const dateForm = form.date;
  const libelleForm = form.libelle;
  const surfaceForm = form.surfaces
  const signatureChoisie = form.signatureChoisie



    // page state

    const [username, setUsername] = useState("");
    

    // page fonctions

    useEffect(()=> {
      (async() => {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user?.attributes?.given_name);
      })();
  
    },[]);

    async function handleSubmit(){
      try{
        const newForm = {
          libelle: libelleForm,
          date: dateForm,
          surfaces: surfaceForm,
          idUser: IdVisiteur,
          idAdmin: id_Admin,
          signatureChoisie: signatureChoisie,
        }
        TracabiliteService.addForm(newForm);
        } catch(error) {
          console.log('error' + error)
        }
    }

    const NavAnnuler = () => {
      navigation.navigate("tracabilteHome");
    }

    const NavConfirmation = () => {
      navigation.navigate("Confirmation")
    }

    // const liste des annimaux

    const [tracabilite, setTracabilite] = useState([]);
    const [animal, setAnimal] = useState("");

    // data liste des annimaux 

    useEffect(()=> {
      TracabiliteService.getListAnimaux().then((result)=> {
        if(result?.data) {
          setTracabilite(result?.data);
          console.log(result);
        }
      }).catch((error) => {
        console.error(error);
      })
    },[])

    return (
        <Container>
            <ContainerContent>
                <SafeAreaView>
                    <Profile>
                        <Wrapper>
                          <Img source={{uri: avatarVisiteur}}/>
                          <Name>{prenomVisiteur} {nomVisiteur}</Name>
                        </Wrapper>
                        <TouchableOpacity onPress={()=> NavAnnuler()}>
                            <Annuler/>
                        </TouchableOpacity>
                    </Profile>
                      <ContainerGrey>
                        <ContainerWhite>
                          <ContainerTitle>
                            <Title>Sélectionnez votre animal</Title>
                          </ContainerTitle>
                          <ContainerList>
                          {tracabilite.map((tracabilite) => (
                            <TouchableOpacity
                            onPress={()=> {
                              if (animalVisiteur == tracabilite.Id) {
                                handleSubmit();
                                NavConfirmation();
                              } else {
                              alert("Erreur d'authentification, l'animal ne correspond pas, retour au menu");
                              NavAnnuler();
                              }
                            }}
                            key={tracabilite.Id}
                            
                            >
                            <Animaux
                            key={tracabilite.Id}
                            Image={tracabilite.Image}
                            Libelle={tracabilite.Libelle}
                            />
                            </TouchableOpacity>
                          ))}
                          </ContainerList>  
                        </ContainerWhite>
                      </ContainerGrey>
                </SafeAreaView>
            </ContainerContent>
        </Container>
    )
}


export default AuthentificationAnimaux;

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
box-sizing : border-box;
background: #FFFFFF;
border-radius: 10px;

`;

const ContainerGrey = styled.View`
  height: 930px;
  width: 680px;
  background: #D9D9D9;
  border-radius:  10px;
  margin-bottom: 30px;
  margin-left : 30px;
  box-sizing: border-box;
`;


const Profile = styled.View`
  width: 740px;
  height: 160px;
  background :  white;
  border-radius : 10px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Wrapper = styled.View`
flex-direction: row;
align-items: center;
`;

const Img = styled.Image`
box-sizing: border-box;
background: blue;
border-radius:  50px;
width: 100px;
height: 100px;
margin-left :30px;
border: 3px solid #1A9CD4;
`

const Name = styled.Text`
  margin-left: 25px;
  font-weight: 400;
  font-size: 40px;
  color: #1A9CD4;
  
`;

const ContainerList = styled.View`
    
    flex-direction: row;
    justify-content: space-between ;
    flex-wrap:wrap;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
`;


const ContainerWhite = styled.View`
  height: 870px;
  width: 620px;
  background: white;
  border-radius:  10px;
  margin-left : 30px;
  margin-top: 30px;
  box-sizing: border-box;
`;

const ContainerTitle = styled.View`
  height: 100px;
  width: 560px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
`;

const Title = styled.Text`
  color: #1A9CD4;
  font-size: 40px;
  text-align: center;
  margin: auto;
`;