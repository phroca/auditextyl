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
        } from 'react-native';
import styled from 'styled-components/native';
import Annuler from "../../components/Annuler";
import Auth from "@aws-amplify/auth";
import TracabiliteService from '../../services/TracabiliteService'
import Animaux from "../../components/Animaux";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const widthContent = screenWidth  - 50;



const AjoutUtilisateur = ({navigation}) => {

    // const dur
    const illu = "image";
    const sign = "signature"

    // page state

    const [username, setUsername] = useState("");

    // page fonctions

    useEffect(()=> {
      (async() => {
        const user = await Auth.currentAuthenticatedUser();
        setUsername(user?.attributes?.given_name);
      })();
  
    },[]);

    const NavAnnuler = () => {
      navigation.navigate("tracabilteHome");
    }
    const NavCamera = () => {
      navigation.navigate("Camera");
    }
    const NavUtilisateur = () => {
      navigation.navigate("MenuUtilisateur");
   } 

    // formulaire state

    const [nom, setNom] = useState("");
    const [nomError, setNomError]= useState(false);
    const [prenom, setPrenom] = useState("");
    const [prenomError, setPrenomError]= useState(false);
    const [image, setImage] = useState("");
    const [imageError, setImageError]= useState(false);
    const [signature, setSignature] = useState("");
    const [signatureError, setSignatureError]= useState(false);
    const [animal, setAnimal] = useState("");
    const [animalError, setAnimalError]= useState(false);

    //formulaire ref

    const refNom = useRef(null);
    const refPrenom = useRef(null);
    const refImage = useRef(null);
    const refSignature = useRef(null);
    const refAnimal = useRef(null);

    // formulaire fonctions

    const handleFocusText = (reference) => {
        reference.current.focus();
      }
    const reinitErrorAttributes = () => {
        setNomError(false);
        setPrenomError(false);
        setImageError(false);
        setSignatureError(false);
        setAnimalError(false);
    }
    async function handleSubmit(){
      reinitErrorAttributes();
      if(nom === "") {
          setNomError(true);
      }
      if(prenom === "") {
          setPrenomError(true);
      }
      if(image === "") {
          setImageError(true);
      }
      if(signature === "") {
        setSignatureError(true);
      }
      if(animal === "") {
        setAnimalError(true);
      }
      try{
        const newUtilisateur = {
          id: 0,
          nom: nom,
          prenom: prenom,
          avatar: image,
          signature: signature,
          role: "employe",
          animal: animal,
          id_form: null
        }
        TracabiliteService.addUser(newUtilisateur);
        NavUtilisateur();
        } catch(error) {
          console.log('error' + error)
        }
    } 

    // modal state

    const [modalVisible, setModalVisible] = useState(false);
    const [tracabilite, setTracabilite] = useState([]);

    // modal fonctions

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
                            <Img></Img>
                            <Name>{username}</Name>
                        </Wrapper>
                        <TouchableOpacity onPress={()=> NavAnnuler()}>
                            <Annuler/>
                        </TouchableOpacity>
                    </Profile>
                    <AjoutUtilisateurForm>
                        <ContainerGrey>
                        <Text>Informations : </Text>
                        <InformationContent>
                            <InfoWrapper>
                                <TouchableWithoutFeedback onPress={()=> handleFocusText(refNom)}>
                                    <InputContainer>
                                        <PreText>Nom : </PreText>
                                            <TextInput ref={refNom} isError={nomError} onChangeText={(e)=> setNom(e)}>
                                            </TextInput>
                                    </InputContainer>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={()=> handleFocusText(refPrenom)}>
                                    <InputContainer>
                                        <PreText>Prénom : </PreText>
                                            <TextInput ref={refPrenom} isError={prenomError} onChangeText={(e)=> setPrenom(e)}>
                                            </TextInput>
                                    </InputContainer>
                                </TouchableWithoutFeedback>
                            </InfoWrapper>
                            <InfoImage>
                              <TouchableOpacity ref={refImage} isError={imageError} 
                                onPress={()=> setImage(illu)}>
                                  <OpenCamerabutton>
                                    <Ionicons name="image-outline" size={100} color="white"></Ionicons>
                                  </OpenCamerabutton>
                              </TouchableOpacity>
                            </InfoImage>
                        </InformationContent>
                        <Text>Veuillez signer ici : </Text>
                        <TouchableOpacity ref={refSignature} isError={signatureError} 
                                onPress={()=> setSignature(sign)}>
                                  <Signbutton>
                                    <Ionicons name="pencil-outline" size={100} color="white"></Ionicons>
                                  </Signbutton>
                        </TouchableOpacity>
                              <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                  setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                  <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Animaux Disponibles</Text>
                                    <ContainerList>
                                    {tracabilite.map((tracabilite) => (
                                      <TouchableOpacity 
                                        ref={refAnimal} 
                                        isError={animalError} 
                                        key={tracabilite.Id}
                                        onPress={() => [
                                          setAnimal(tracabilite.Id),
                                          setModalVisible(!modalVisible),
                                          ]
                                        }
                                      >
                                      <Animaux 
                                          key={tracabilite.Id}
                                          Image={tracabilite.Image}
                                          Libelle={tracabilite.Libelle}
                                      />
                                      </TouchableOpacity>   
                                    ))}
                                    </ContainerList>
                                  </View>
                                </View>
                              </Modal>
                              <Text>Choisissez votre animal :</Text>
                              
                              <TouchableOpacity
                                onPress={() => setModalVisible(true)}>
                                <ModalButton>
                                  <TextButtonModal>Liste des animaux</TextButtonModal>
                                  </ModalButton>
                              </TouchableOpacity>
                              
                                <TouchableOpacity onPress={()=> handleSubmit()}>
                                    <ButtonAjout>
                                        <ButtonText>Ajouter l'utilisateur</ButtonText>
                                    </ButtonAjout>
                                </TouchableOpacity>
                            
                            
                        </ContainerGrey>
                        
                    </AjoutUtilisateurForm>
                </SafeAreaView>
            </ContainerContent>
        </Container>
    )
}


export default AjoutUtilisateur;

const ContainerList = styled.View`
    
    flex-direction: row;
    justify-content: space-between ;
    flex-wrap:wrap;
    padding-right: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    
    backgroundColor: 'white',
    width: screenWidth,
    height: screenHeight,
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#1A9CD4',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
});


const OpenCamerabutton = styled.View`
  background-color : #1A9CD4;
  height: 110px;
  width: 110px;
  border-radius: 10px;
  align-items: center;
`;

const Signbutton = styled.View`
  background-color : #1A9CD4;
  margin-left : 30px;
  margin-top : 20px;
  height: 110px;
  width: 620px;
  border-radius: 10px;
  align-items: center;
`;

const ModalButton = styled.View`
  background-color : #1A9CD4;
  margin-top: 20px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 620px;
  border-radius: 10px;
  align-items: center;
`;

const ButtonAjout = styled.View`
  background-color : #1A9CD4;
  margin-top: 90px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 620px;
  border-radius: 10px;
  align-items: center;
`;

const InfoWrapper = styled.View`
    width: 420px;
    margin-left: 30px;
    margin-right : 30px;
`;

const InfoImage = styled.View`
    height: 170px;
    margin-top: 30px;
    width : 170px;
    background: white;
    border-radius : 10px;
    align-items: center;
    justify-content: center;
`;

const InformationContent = styled.View`
    flex-direction: row;
    width: 680px;
    height: 230px;
    margin-bottom: -30px;
`;

const TextInput = styled.TextInput`
  height: 70px;
  border-radius: 10px;
  font-size: 17px;
  color: #283c46;
  padding-left: 160px;
  background: #FFFFFF;
  z-index: 1;

`;

const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 30px;
  color: white;
  text-align : center;
`;

const AjoutUtilisateurForm = styled.View`
`;

const InputContainer = styled.View`
    justify-content: center;
    margin-top: 30px;
`

const PreText = styled.Text`
  color: #1A9CD4;
  font-weight:bold;
  font-size: 25px;
  margin-left: 30px;
  position: absolute;   
  z-index: 2;
`;

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

const TextButtonModal = styled.Text`
  font-weight: 400;
  font-size: 30px;
  color: white;
  text-align : center;
`;

const Text = styled.Text`
  font-weight: 400;
  font-size: 30px;
  color: black;
  margin-left:30px;
  color:  #1A9CD4;
  padding-top: 20px;
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
