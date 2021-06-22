import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Button,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { Input, Tile, Icon } from 'react-native-elements';

const cameraOptions = {
        mediaType: 'photo',
        quality: 1,
        maxWidth: 100,
        maxHeight: 200,
        saveToPhotos: false
    }
const libraryOption = {
        mediaType: 'photo',
        quality: 1,
        maxHeight: 200,
        maxWidth: 200,
    }


const UploadImageScreen = (props) =>{

    const [selectedImage, setSelectedImage] = useState(null);

    const onPressImage = (options) => {
         ImagePicker.launchCamera(options, (response) => {
            if(response.didCancel){
               console.log('El usuario ha cancelado');
            }
            else if(response.errorCode){
                console.log('Error Code: ', response.errorCode);
                console.log('Error message: ', response.errorMenssage);
            }else{
                setSelectedImage(response.assets[0].uri);
            }
        });
    }

   return(
     <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Image
                source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}}
                style={styles.logo} />
        </View>
        <View style={styles.p}>
            <Text style={styles.highlightText}>Foto de perfil</Text>
            <Text style={styles.lightText}>Usaremos la camara de tu celular para tomar la foto de perfil</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => onPressImage(cameraOptions)}>
            <Image
                source={{
                    uri: selectedImage !== null
                    ? selectedImage
                    : 'https://picsum.photos/200/200'
                }}
                style={styles.image}/>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
            <Text>Elige un usuario</Text>
            <Text style={styles.innerText}>Pedro34</Text>
        </View>
        <View style={styles.buttons}>
            <Button
                title="Siguiente"
                color="#16d967"
                onPress={() => props.navigation.navigate("BasicFormScreen", {
                    imageRoute: selectedImage
                })}/>
        </View>
     </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    highlightText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    innerText:{
        color: '#48BB78'
    },
    lightText:{
        fontSize: 12,
        color: '#A0AEC0',
        textAlign: 'center',
        marginRight: 60,
        marginLeft: 60
    },
    logo: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    image: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    p: {
        margin: 25
    },
    buttons:{
        padding: 24,
        paddingBottom: 60
    }
});

export default UploadImageScreen;
