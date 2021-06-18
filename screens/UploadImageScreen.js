import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';

import { Input, Button } from 'react-native-elements';


const UploadImageScreen = () => {
   return(
     <ScrollView styles={{backgroundColor: '#fff'}}>
     <View>
        <View style={styles.container}>
            <Image source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={styles.logo} />
        </View>
        <View style={styles.p}>
            <Text style={styles.highlightText}>Foto de perfil</Text>
            <Text style={styles.lightText}>Usaremos la camara de tu celular para tomar la foto de perfil</Text>
        </View>
        <View style={styles.container}>
            <Image source={{uri:'https://picsum.photos/200/200'}}  style={styles.image}/>
        </View>
        <View style={styles.container}>
            <Text>Elige un usuario</Text>
            <Text style={styles.innerText}>Pedro34</Text>
        </View>
        <View style={styles.buttons}>
            <Button title="Siguiente" containerStyle={{color: '#16d967'}}/>
        </View>
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
        height: 200,
        width: 200,
        borderRadius: 100,
        resizeMode: 'contain'
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
