import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import Auth from "@aws-amplify/auth";


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

export default function HomeScreen() {
    const [username, setUsername] = useState("");

    useEffect(()=> {
      (async() => {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user?.attributes?.given_name);
      })();

    },[]);
    


  return ( 
          <Container>   
            <StatusBar style="auto" />
              <SafeAreaView>
                <ScrollView style={{height: "100%"}} showsVerticalScrollIndicator={false}>
                  <TitleBar>
                      <Title>Bonjour {username} !</Title>
                  </TitleBar>
              </ScrollView>
            </SafeAreaView>
          </Container>

  ) 
}

