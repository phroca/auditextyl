import React, { useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground, Button} from "react-native";
import { Camera, CameraType} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import BoutonCamera from "../../components/BoutonCamera";
import styled from "styled-components";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function CameraScreen() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const takePicture = async () => {
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                console.log(data);
                setImage(data.uri);
            } catch (e) {
                console.log(e);
            }
        }
    }

    const SaveImage = async () => {
        if(image) {
            try{
                await MediaLibrary.createAssetAsync(image);
                alert(`l'image à bien été prise`);
                setImage(null);
            }
            catch(e){
            console.log(e);
            }
        }
    }

    if(hasCameraPermission === false) {
        return <Text>Permission refusées</Text>
    }

    return (
        <View style={styles.container}>
        {!image ?
            <Camera
                style={styles.camera}
                type={type}
                flashMode={flash}
                ref={cameraRef}
            >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 30, 
                }}>
                    <BoutonCamera icon={"retweet"} onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back)
                    }} />

                </View>
                <View style={styles.takeButton}>
                    <BoutonCamera title={"Prendre une photo"} icon="camera" style={styles.boutonCamera} onPress={takePicture}/>
                </View>
            </Camera>
            :
            <Background>
                <ImageBackground source={{uri: image}} style={styles.image}>
                <View style={styles.wrapper}>
                    <View style={styles.retakeButton}>
                        <BoutonCamera title={"Reprendre la photo"} icon="retweet" style={styles.boutonCamera} onPress={() => setImage(null)}/>
                    </View>
                    <View style={styles.retakeButton}>
                        <BoutonCamera title={"Save"} icon="check" style={styles.boutonCamera} onPress={SaveImage}/>
                    </View>
                </View>
                </ImageBackground>
                
            </Background>
        }
        </View>
    )
}

const Background = styled.View``;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        width: screenWidth ,
        height:  screenHeight,
    },
    boutonReturn:{
        backgroundColor: "#1A9CD4",
        height: 70,
        marginBottom: 80,
        width: 100,
        alignItems: "flex-end",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    camera:{
        width: screenWidth ,
        height:  screenHeight,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    image:{
        width: screenWidth ,
        height:  screenHeight,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    takeButton:{
        backgroundColor: "#1A9CD4",
        height: 70,
        marginBottom: 80,
        width: 300,
        alignItems: "flex-end",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    retakeButton:{
        backgroundColor: "#1A9CD4",
        height: 70,
        marginBottom: 80,
        width: 300,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        zIndex: 3,
        padding:15, 
    },
    wrapper:{
        flexDirection: "row",
        justifyContent: "space-between",

    },
})