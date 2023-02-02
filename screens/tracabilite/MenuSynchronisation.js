import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet,} from 'react-native';
import styled from 'styled-components/native';
import TracabiliteService from '../../services/TracabiliteService'
import { formulaire } from "../../models/formulaire";
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;


const MenuSynchronisation = ({navigation}) => {
  const [tracabilite, setTracabilite] = useState(formulaire);

  const [username, setUsername] = useState("");

  useEffect(()=> {
    (async() => {
      const user = await Auth.currentAuthenticatedUser();
      setUsername(user?.attributes?.given_name);
    })();

  },[]);

  useEffect(()=> {
    TracabiliteService.getListTracabilite().then((result)=> {
      console.log("traçabilité résult ", result);
      if(result?.data) {
        setTracabilite(result?.data);
      }
    }).catch((error) => {
      console.error(error);
    })
  },[TracabiliteService])

  const NavAnnuler = () => {
      navigation.navigate("tracabilteHome");
  }
    return (
        <Container>
            <ContainerContent>
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
                  <ContainerTitle>
                    <Title>Menu synchronisation</Title>
                  </ContainerTitle>
                  <ContainerList>
                  </ContainerList>
                </ContainerWhite>
                
              </ContainerGrey>
            </ContainerContent>
        </Container>
    )
}

export default MenuSynchronisation;

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
  margin: auto;
  text-align: center;
  font-weight: 400;
  font-size: 100px;
  color: black;
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

const ContainerTitle = styled.View`
  height: 100px;
  width: 560px;
  background: #D9D9D9;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  color: #1A9CD4;;
  font-size: 40px;
  text-align: center;
  margin: auto;
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