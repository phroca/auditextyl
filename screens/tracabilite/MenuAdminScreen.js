import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Auth from "@aws-amplify/auth";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;


const TracabiliteScreen = ({navigation}) => {

  const NavTracabilite = () => {
      navigation.navigate("MenuTracabilite");
  }
  const NavSatistiques = () => {
    navigation.navigate("AuthentificationAnimaux");
  }
  const NavSynchronisation = () => {
    navigation.navigate("MenuSynchronisation");
  }

  const [username, setUsername] = useState("");

    useEffect(()=> {
      (async() => {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user?.attributes?.given_name);
      })();

    },[]);
    

    return (
        <Container>
            <ContainerContent>
              <Profile>
                <Img></Img>
                <Name>{username}</Name>
              </Profile>
              <ContainerGrey>
                <ContainerWhite>
                  <ContainerTitle>
                    <Title>Menu Administrateur</Title>
                  </ContainerTitle>

                  <ContainerOptions>
                    <TouchableOpacity onPress={()=> NavTracabilite()}>
                    <MenuEnregistrements>
                      <Ionicons name="arrow-forward-circle-outline" size={150} color="#1A69D4" style={{
                        marginLeft:20,
                      }}
                      >
                      </Ionicons>
                      <Wrapper>
                        <Text>Menu des enregistrements</Text>
                      </Wrapper>
                    </MenuEnregistrements>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=> NavSatistiques()}>
                    <Statistiques>
                    <Ionicons name="stats-chart-outline" size={150} color="#0F161A" style={{
                        marginLeft:20,
                      }}
                      >
                      </Ionicons>
                      <Wrapper>
                        <Text>Voir les statistiques de la traçabilté</Text>
                      </Wrapper>
                    </Statistiques>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=> NavSynchronisation()}>
                    <Synchronisation>
                    <Ionicons name="alert-circle-outline" size={150} color="#970000" style={{
                        marginLeft:20,
                      }}
                      >
                      </Ionicons>
                      <Wrapper>
                        <Text>Synchroniser les données, 19 enregistrements en attente</Text>
                      </Wrapper>
                    </Synchronisation>
                    </TouchableOpacity>
                  </ContainerOptions>

                </ContainerWhite>
              </ContainerGrey>
            </ContainerContent>
        </Container>
    )
}

export default TracabiliteScreen;
  
const Wrapper = styled.View`
  height:206px;
  width: 360px;
  align-items: center;
`;

const Text = styled.Text`
  margin: auto;
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  color: white;
`;

const MenuEnregistrements = styled.View`
height:206px;
width: 560px;
background: #1A9CD4;
flex-direction: row;
border-radius: 10px;
align-items: center;
`;

const Statistiques = styled.View`
height:206px;
width: 560px;
background: #283C46;
flex-direction: row;
border-radius: 10px;
align-items: center;
margin-bottom: 31px;
margin-top: 31px;
`;

const Synchronisation = styled.View`
height:206px;
width: 560px;
background: #FF0000;
flex-direction: row;
border-radius: 10px;
align-items: center;
`;
 
const ContainerOptions = styled.View`
  height: 680px;
  width: 560px;
  background: white;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
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

const Profile = styled.View`
  width: 740px;
  height: 160px;
  background :  white;
  border-radius : 10px;
  box-sizing: border-box;
`

const Img = styled.Image`
box-sizing: border-box;
background: blue;
border-radius:  50px;
position: absolute;
width: 100px;
height: 100px;
margin-top:30px;
margin-left :30px;
border: 6px solid #1A9CD4;
`

const Name = styled.Text`
  position: absolute;
  margin-top: 50px;
  margin-left: 160px;
  font-weight: 400;
  font-size: 40px;
  color: #1A9CD4;
  
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


const Title = styled.Text`
  color: #1A9CD4;
  font-size: 40px;
  text-align: center;
  margin: auto;
`;