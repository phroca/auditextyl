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
         TouchableHighlight,
        } from 'react-native';
import styled from 'styled-components/native';
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";
import TracabiliteService from '../../services/TracabiliteService'
import Animaux from "../../components/Animaux";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;

const Confirmation = ({navigation}) => {

    // const dur
    // page state

    const [username, setUsername] = useState("");
    

    // page fonctions

    useEffect(()=> {
      (async() => {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user?.attributes?.given_name);
      })();
  
    },[]);

    const NavMenu = () => {
      navigation.navigate("MenuTracabilite");
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
                    </Profile>
                      <ContainerGrey>
                        <Wrapper2>
                          <Logo><Ionicons name="checkmark-outline" size={150} color="white"></Ionicons></Logo>
                          <Title>Votre enregistrement à bien été pris en compte</Title>
                        </Wrapper2>
                        <Wrapper3>
                          <TouchableOpacity
                            onPress={()=>
                            NavMenu()
                            }
                          >
                            <BouttonTerminer>
                              <Text>Terminer et revenir au menu</Text>
                            </BouttonTerminer>
                          </TouchableOpacity>
                        </Wrapper3>
                          
                      </ContainerGrey>
                </SafeAreaView>
            </ContainerContent>
        </Container>
    )
}


export default Confirmation;

const Wrapper3 = styled.View`
    align-items: center;
    width: 100%;
`;

const Text = styled.Text`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  color: white;
`;


const BouttonTerminer = styled.View`
  height:80px;
  width: 620px;
  background: #1A9CD4;
  border-radius: 10px;
  justify-content :center;
`;

const Wrapper2 = styled.View`
    align-items: center;
`;

const Title = styled.Text`
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    color: #1A9CD4;
`;

const Logo = styled.View`
    background: #008000;
    border-radius:  75px;
    width:150px;
    height: 150px;
    margin-bottom: 60px;
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
  justify-content: center;
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
border: 6px solid #1A9CD4;
`

const Name = styled.Text`
  margin-left: 25px;
  font-weight: 400;
  font-size: 40px;
  color: #1A9CD4;
  
`;
