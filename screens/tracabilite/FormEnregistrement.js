import {
    View,
    Text,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Animated,
    Platform,
    Modal,
    StyleSheet,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React, {Profiler, useRef, useState, useEffect} from 'react';
import styled, { StyleSheetManager } from 'styled-components';
import { Ionicons } from "@expo/vector-icons";
import Annuler from '../../components/Annuler';
import Surface from '../../components/Surface';
import TracabiliteService from '../../services/TracabiliteService'
import DateTimePicker from '@react-native-community/datetimepicker';
import Auth from "@aws-amplify/auth";
import CalendarPicker from 'react-native-calendar-picker';

const {height, width} = Dimensions.get('screen');

  
const FormEnregistrement = ({navigation}) => {

    const NavAnnuler = () => {
        navigation.navigate("MenuEnregistrement");
      }
      

    const [ListSurfaceChecked, setListSurfaceChecked] = useState([])

    const [surface1, setSurface1] = useState([]);
    const [surface2, setSurface2] = useState([]);
    const [surface3, setSurface3] = useState([]);
    const [surface4, setSurface4] = useState([]);

    useEffect(()=> {
        TracabiliteService.getListSurface1().then((result)=> {
          if(result?.data) {
            setSurface1(result?.data);
            console.log(result);
          }
        }).catch((error) => {
          console.error(error);
        })
    },[])
    
    useEffect(()=> {
        TracabiliteService.getListSurface2().then((result)=> {
          if(result?.data) {
            setSurface2(result?.data);
            console.log(result);
          }
        }).catch((error) => {
          console.error(error);
        })
    },[])

    useEffect(()=> {
        TracabiliteService.getListSurface3().then((result)=> {
          if(result?.data) {
            setSurface3(result?.data);
            console.log(result);
          }
        }).catch((error) => {
          console.error(error);
        })
    },[])

    useEffect(()=> {
        TracabiliteService.getListSurface4().then((result)=> {
          if(result?.data) {
            setSurface4(result?.data);
            console.log(result);
          }
        }).catch((error) => {
          console.error(error);
        })
    },[])

     // modal state

     const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {
        key: '001',
        component : 
            () => {
            return(
                <FlatListContent>
                    <Title>Séléctionnez La date</Title>
                        <CalendarPicker
                            width={width-140}
                            nextTitle='Suivant'
                            previousTitle='Précedent'
                            weekdays={['Dim','lun','Mar','Mer','Jeu','Ven','Sam']}
                            months={['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']}
                            selectedDayColor="#1A9CD4"
                            selectedDayTextColor="#FFFFFF"s
                         />
                    <Text></Text>
                </FlatListContent>
            )
        }
    },
    {
        key: '002',
        component : 
            () => {
                console.log(ListSurfaceChecked)
            return(
                <FlatListContent>
                <Title>Séléctionnez au moins une surface</Title>
                    <ContainerList>
                        <ListSurface>
                            {surface1.map((surface1) => (
                                <TouchableOpacity onPress={() => 
                                    setListSurfaceChecked(ListSurfaceChecked => [...ListSurfaceChecked, surface1.Libelle])
                                    
                                }>
                                    <Surface 
                                        Libelle={surface1.Libelle}
                                        Image={surface1.Image}
                                    />
                                </TouchableOpacity>   
                            ))}
                        </ListSurface>
                    </ContainerList>
                </FlatListContent>
            )
        }
    },
    {
        key: '003',
        component : 
            () => {
            return(
                <FlatListContent>
                    <Title>Séléctionnez au moins une surface</Title>
                    <ContainerList>
                        <ListSurface>
                            {surface2.map((surface2) => (
                                <TouchableOpacity>
                                    <Surface 
                                        Libelle={surface2.Libelle}
                                        Image={surface2.Image}
                                    />
                                </TouchableOpacity>   
                            ))}
                        </ListSurface>
                    </ContainerList>
                </FlatListContent>
            )
        }
    },
    {
        key: '004',
        component : 
            () => {
            return(
                <FlatListContent>
                    <Title>Séléctionnez au moins une surface</Title>
                    <ContainerList>
                        <ListSurface>
                            {surface3.map((surface3) => (
                                <TouchableOpacity>
                                    <Surface 
                                        Libelle={surface3.Libelle}
                                        Image={surface3.Image}
                                    />
                                </TouchableOpacity>   
                            ))}
                        </ListSurface>
                    </ContainerList>
                </FlatListContent>
            )
        }
    },
    {
        key: '005',
        component : 
            () => {
            return(
                <FlatListContent>
                    <Title>Séléctionnez au moins une surface</Title>
                    <ContainerList>
                        <ListSurface>
                            {surface4.map((surface4) => (
                                <TouchableOpacity>
                                    <Surface 
                                    Libelle={surface4.Libelle}
                                    Image={surface4.Image}
                                />
                                </TouchableOpacity>   
                            ))}
                        </ListSurface>
                    </ContainerList>
                </FlatListContent>
            )
        }
    },
    {
        key: '006',
        component : 
            () => {
            return(
                <FlatListContent>
                    <Title>Résumé de votre       enregistrement</Title>
                    <ContainerResume>
                        <CaptionResume>Informations :</CaptionResume>
                        <ContainerControl>
                            <ContainerInformation>
                                <ResumeCaption>Controlé par : </ResumeCaption>
                                <ResumeCaption>Louis</ResumeCaption>
                            </ContainerInformation>
                            <ImgResume></ImgResume>
                        </ContainerControl>
                        <ContainerDate>
                            <ResumeCaption>Enregistrement effectué le : </ResumeCaption>
                            <ResumeCaption>10/02/2023</ResumeCaption>
                        </ContainerDate>
                    <CaptionResume>Liste des surfaces traitées :</CaptionResume>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ContainerListeSurface>
                        { ListSurfaceChecked.map((item, key) => (
                            <ContainerSurface>
                                <ContainerText>
                                    <ResumeCaption key={key}>{item}</ResumeCaption>
                                </ContainerText>
                                <TouchableOpacity>
                                    <BoutonModifSurface>
                                        <Ionicons name="pencil-outline" size={35} color="white"></Ionicons>
                                    </BoutonModifSurface>
                                </TouchableOpacity>
                            </ContainerSurface>
                        ))}
                        </ContainerListeSurface>
                        </ScrollView> 
                        <TouchableOpacity onPress={() => setListSurfaceChecked([])}>
                            <BoutonToutSupprmimer>
                                <BoutonToutSupprmimerCaption>Tout Supprimer</BoutonToutSupprmimerCaption>
                                <Ionicons name="trash-outline" size={60} color="white"/>
                            </BoutonToutSupprmimer>
                        </TouchableOpacity>
                    </ContainerResume>
                </FlatListContent>
            )
        }
    },
    {
        key: '007',
        component : 
            () => {
            return(
                    
                <FlatListContent>
                    <Title>Choissez Votre mode de   signature</Title>
                        <ContainerSelectSignature>
                            <CaptionSignature>Ma signature:</CaptionSignature>
                                <ContainerSignature>
                                    <Text>signaure</Text>  
                                </ContainerSignature>
                            <CaptionSignature>Signer moi même:</CaptionSignature>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                  setModalVisible(!modalVisible);
                                }}>
                                <ContainerModal>
                                    <ContainerModalWhite>
                                        <ContainerModalGrey>
                                            <ModalTitle>Signature</ModalTitle>
                                            <SignaturePad>
                                                <Text>aaaaa</Text>
                                            </SignaturePad>
                                            <ModalButtonContainer>
                                                    <TouchableOpacity onPress={() => 
                                                        setModalVisible(false)
                                                    }>
                                                        <ButtonModal>
                                                            <Caption>Annuler</Caption>
                                                        </ButtonModal>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => 
                                                        setModalVisible(false)
                                                    }>
                                                        <ButtonModal>
                                                            <Caption>Signer</Caption>
                                                        </ButtonModal>
                                                    </TouchableOpacity>
                                            </ModalButtonContainer>
                                            
                                        </ContainerModalGrey>
                                    </ContainerModalWhite>
                                  
                                </ContainerModal>
                              </Modal>
                                <TouchableOpacity  onPress={() => [
                                    setModalVisible(true)
                                ]}>
                                    <BoutonSignature>
                                        <Ionicons name="pencil-outline" size={150} color="white"/>
                                    </BoutonSignature>
                                </TouchableOpacity>
                        </ContainerSelectSignature>
                </FlatListContent>
            )
        }
    },
]
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  const libelleButton = data.length - 1 == currentIndex ? 'Envoyer' : 'Précedent';
  //const [formulaire, setFormulaire] = useState([]);
  
  //const touchableOpacityMode = formulaire == '' ? true : false
  //const touchableOpacityColor = formulaire == '' && libelleButton == 'Envoyer' ? '#D9D9D9' : '#1A9CD4'
//   const Redirect  = formulaire !== '' && libelleButton == 'Envoyer' && touchableOpacityColor == '#1A9CD4' ? alert('réussi') : alert('pas reussi')
                    


  return (
    <Container>
    <SafeAreaView>
        <Animated.FlatList
            ref={ref}
            data={data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled={false}
            horizontal
            renderItem={({item, index}) => {
                return (
                    <AnimatedContainer>
                        <ContainerWhite>
                            <Profile>
                                <Wrapper>
                                    <Img></Img>
                                    <Name>Louis</Name>
                                </Wrapper>
                                <TouchableOpacity onPress={()=> NavAnnuler()}>
                                    <Annuler/>
                                </TouchableOpacity>
                            </Profile>
                            {item.component()}
                            <ContainerButton>
                            {currentIndex !== 0 && (
                                <TouchableOpacity
                                    //disabled={touchableOpacityMode}
                                    onPress={() => {
                                        const prevItemIndex = currentIndex > 0 ? currentIndex - 1 : 0;
                                        const offset = prevItemIndex * width;
                                        ref?.current?.scrollToOffset({offset});
                                        setCurrentIndex(prevItemIndex);

                                    }}
                                    style={{
                                    width: data.length - 1 == currentIndex ? '100%' : 200,
                                    backgroundColor : '#1A9CD4',
                                    borderRadius: 10,
                                    }}
                                >
                                    <Button>
                                        <Caption>{libelleButton}</Caption>
                                    </Button>
                                </TouchableOpacity>
                            )}
                            {data.length - 1 !== currentIndex && (
                                <TouchableOpacity
                                    onPress={() => {
                                        const nextItemIndex = currentIndex < data.length -1 ? currentIndex + 1 : data.length -1;
                                        const offset = nextItemIndex * width;
                                        ref?.current?.scrollToOffset({offset});
                                        setCurrentIndex(nextItemIndex);
                                        }}
                                        style={{
                                            width: currentIndex == 0 ? '100%' : 200,
                                            backgroundColor: '#1A9CD4',
                                            borderRadius: 10,
                                        }}
                                >
                                    <Button>
                                        <Caption>Suivant</Caption>
                                    </Button>
                                </TouchableOpacity>
                            )}
                            </ContainerButton>
                            <ContainerIndicator>
                                {data.map((item, index) => {
                                return (
                                    <Indicator
                                    style={{
                                        width: currentIndex == index ? 40 : 20,
                                        height: currentIndex == index ? 40 : 20,
                                        borderRadius: currentIndex == index ? 20 : 10,
                                        backgroundColor: currentIndex == index ? '#1A9CD4' : '#D9D9D9',
                                    }}
                                    >
                                    </Indicator>
                                );
                                })}
                            </ContainerIndicator>
                        </ContainerWhite>
                    </AnimatedContainer>
                );
            }}
            />
            </SafeAreaView>
    </Container>
  );
}

export default FormEnregistrement;


// Slide Resume

const BoutonToutSupprmimerCaption = styled.Text`
  color: white;
  font-size: 30px;
  margin-left: 30px;
`;

const BoutonToutSupprmimer = styled.View`
background: #1A9CD4;
border-radius:  10px;
width: ${width - 240}px;
height: 90px;
flex-direction : row;
margin-top: 30px;
margin-bottom: 30px;
align-items: center;
justify-content :space-between;
padding-right: 20px;
margin-left : 30px;
`;

const BoutonModifSurface = styled.View`
background: #1A9CD4;
border-radius:  30px;
width: 60px;
height: 60px;
margin-left: 30px;
align-items: center;
justify-content: center;
`;

const ContainerText = styled.View`
    justify-content: center;
    padding-left: 30px;
    background-color : #D9D9D9;
    height : 70px;
    width: ${width - 330}px;
    border-radius: 10px;
`;

const ContainerSurface = styled.View`
    height : 70px;
    width: ${width - 240}px;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
`;

const ContainerListeSurface = styled.View` 
    margin-left: 30px;
    width: ${width - 240}px;
    border-radius: 10px;
`;

const ContainerDate = styled.View`
    background-color : #D9D9D9;
    height : 70px;
    width: ${width - 240}px;
    margin-left: 30px;
    border-radius: 10px;
    flex-direction: row;
    margin-top : 10px;
    align-items : center;
    padding-left: 30px;
`;

const CaptionResume = styled.Text`
  color: #1A9CD4;
  font-size: 30px;
  padding-top : 20px;
  padding-bottom : 20px;
  margin-left: 30px;
`;

const ContainerResume = styled.View`
    background-color: white;
    width: ${width - 180}px;
    border-radius: 10px;
    height: ${height - 660}px;
`;

const ContainerControl = styled.View`
    background-color : #D9D9D9;
    height : 70px;
    width: ${width - 240}px;
    margin-left: 30px;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items : center;
`;

const ContainerInformation = styled.View`
    flex-direction : row;
    align-items: center;
    margin-left: 30px;
`;

const ResumeCaption = styled.Text`
    color: #1A9CD4;
    font-size : 25px;
`;

const ImgResume = styled.Image`
background: blue;
border-radius:  25px;
width: 50px;
height: 50px;
margin-right: 30px;
border: 2px solid #1A9CD4;
`
// Common Form

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #1A9CD4;
`;

const AnimatedContainer = styled.View`
    width: ${width}px;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Caption = styled.Text`
    color: white;
    font-size : 25px;
`;

const ContainerIndicator = styled.View`
    flex-direction: row;
    width: ${width}px;
    justify-content: center;
    align-items: center;
`;

const ContainerButton = styled.View`
    width: ${width}px;
    margin-bottom: 30px;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 60px;
    padding-right: 60px;
`;

const Button = styled.View`
    height: 70px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const Indicator = styled.View`
    margin-left: 5px;
`;

const ContainerWhite = styled.View`
    align-items: center;
    width: ${width - 60}px;
    height: ${height - 160}px;
    background-color: white;
    border-radius: 10px;

`;

const Wrapper = styled.View`
flex-direction: row;
align-items: center;
`;

// Common FlatList

const FlatListContent = styled.View`
background: #D9D9D9;
align-items: center;
margin-bottom: 30px;
width: ${width - 120}px;
border-radius: 10px;
height: ${height - 520}px;
`;

const Title = styled.Text`
  color: #1A9CD4;
  font-size: 40px;
  text-align: center;
`;

//

// Surface

const ContainerList = styled.View`
    height : 600px;
    width : 620px;
`;

const ListSurface = styled.View`
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    height : 600px;
    width : 620px;
    justify-content : space-between;
    align-content : center;
`;

//

// Confimation

const CaptionConfirmation = styled.Text`
  color: #1A9CD4;
  font-size: 30px;
  padding-top : 20px;
  margin-left: 30px;
  text-align: center;
`;

const Logo = styled.View`
    align-items : center;
    justify-content: center;
    background: green;
    border-radius:  75px;
    width: 150px;
    height: 150px;
`;

const ContainerConfirmation = styled.View`
    width: ${width - 180}px;
    border-radius: 10px;
    height: ${height - 560}px;
    align-items: center;
    justify-content: center;
`;

//

// Signature

const ContainerModal = styled.View`
    flex: 1;
    align-items: center;
`;

const ModalButtonContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items:  center;
    width: ${width - 120}px;
    margin-top : 30px;
    `;

const SignaturePad = styled.View`
    background-color: white;
    width: ${width - 120}px;
    height: ${height - 309}px;
    border-radius: 10px;
`;

const ContainerModalWhite = styled.View`
    background-color: white;
    width: ${width}px;
    height: ${height}px;
    border-radius: 10px;
    padding : 30px;
`;

const ModalTitle = styled.Text`
    color: #1A9CD4;
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const ContainerModalGrey = styled.View`
    background-color: #D9D9D9;
    width: ${width - 60}px;
    height: ${height - 80}px;
    border-radius: 10px;
    align-items: center;
`;

const BoutonSignature = styled.View`
    background-color: #1A9CD4;
    width: ${width - 450}px;
    margin-left: 30px;
    height: 210px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;

const ContainerSignature = styled.View`
    background-color: white;
    width: ${width - 450}px;
    margin-left: 30px;
    height: 210px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border : 6px solid #D9D9D9;
    border-radius: 10px;
`;

const CaptionSignature = styled.Text`
  color: #1A9CD4;
  font-size: 30px;
  padding-top : 20px;
  margin-left: 30px;
`;

const ContainerSelectSignature = styled.View`
    background-color: white;
    width: ${width - 180}px;
    border-radius: 10px;
    height: ${height - 660}px;
`;

const ButtonModal = styled.View`
    width: 200px;
    height: 70px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #1A9CD4;
`;

//

// Profile

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

const Profile = styled.View`
  width: ${width - 60}px;
  height: 160px;
  background :  white;
  border-radius : 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

//

