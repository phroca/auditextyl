import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import TracabiliteService from '../../services/TracabiliteService'
import { formulaire } from "../../models/formulaire";
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";
import Enregistrement from "../../components/Enregistrement";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;


const MenuTracabilite = ({navigation}) => {
  const [tracabilite, setTracabilite] = useState([]);

  const [username, setUsername] = useState("");

  useEffect(()=> {
    (async() => {
      const user = await Auth.currentAuthenticatedUser();
      setUsername(user?.attributes?.given_name);
    })();

  },[]);

  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const ConfimrationSuppr = (tracabilite) => {
    Alert.alert(
        'Confimration',
        "Voulez vous supprimer l'enregistrement : " + tracabilite.Id + " " + tracabilite.Libelle + " ?",
        [
            {
                text: 'oui',
                onPress: () => {
                  TracabiliteService.supprForm(tracabilite.Id);
                  alert("L'enregistrement a bien été supprimé");
                  
                }
            },
            {
                text: 'non',
                onPress: () => {
                    alert('No Pressed');
                }
            }
        ]
    )
}

  useEffect(()=> {
    TracabiliteService.getListTracabilite().then((result)=> {
      console.log("traçabilité résult ", result);
      if(result?.data) {
        setTracabilite(result?.data);
        console.log(tracabilite);
      }
    }).catch((error) => {
      console.error(error);
    })
  },[])

  const NavAnnuler = () => {
      navigation.navigate("tracabilteHome");
  }

  const NavUtilisateur = () => {
    navigation.navigate("MenuUtilisateur");
 } 

 const NavTracabilite = () => {
  navigation.navigate("tracabilteHome");
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
                <TouchableOpacity onPress={()=> NavAnnuler()}>
                        <Annuler/>
                </TouchableOpacity>
              </Profile>
              <ContainerGrey>
                <ContainerWhite>
                  <TouchableOpacity onPress={()=> NavUtilisateur()}>
                    <ContainerButtonAdd>
                      <Title>Ajouter un nouvel enregistrement</Title>
                      <Ionicons name="add-circle-outline" size={60} color="white"/>
                    </ContainerButtonAdd>
                    <Text>Liste des enregistrements</Text>
                  </TouchableOpacity>
                  <ContainerList>
                  {tracabilite.map((tracabilite) => (
                  <TouchableOpacity 
                  key={tracabilite.Id}
                  onPress={()=> ConfimrationSuppr(tracabilite)}>
                  <Enregistrement
                    key={tracabilite.Id}
                    Numero={tracabilite.Id}
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

export default MenuTracabilite;

const ContainerListContent = styled.View`
  height: 100px;
  width: 560px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
`;

const ContainerList = styled.View``;

const Wrapper = styled.View`
flex-direction: row;
align-items: center;
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

const Text = styled.Text`
  font-weight: 400;
  font-size: 30px;
  margin-top: 20px;
  color: black;
  margin-left: 30px;
`;


const Img = styled.Image`
box-sizing: border-box;
background: blue;
border-radius:  50px;
width: 100px;
height: 100px;
margin-left :30px;
border: 6px solid #1A9CD4;
`

const Name = styled.Text`
  margin-left: 30px;
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

const ContainerWhite = styled.View`
  height: 870px;
  width: 620px;
  background: white;
  border-radius:  10px;
  margin-left : 30px;
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