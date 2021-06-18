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


const BasicFormScreen = () => {
   return(
     <ScrollView styles={{backgroundColor: '#fff'}}>
     <View>
        <View style={styles.container}>
            <Image source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={styles.logo} />
        </View>
        <View style={styles.p}>
        <Text style={styles.highlightText}>Datos Personales</Text>
        <Text style={styles.lightText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Text>
        </View>
        <View style={styles.p}>
            <Text>Nombre</Text>
            <Input placeholder='Pedro Ramirez'/>
            <Text>Email</Text>
            <Input placeholder='pedro@mail.com'/>
            <Text>Medellin</Text>
            <Input placeholder='Medellin'/>
            <Text>Sector o barrio</Text>
            <Input placeholder='Poblado'/>
        </View>
        <View style={styles.buttons}>
        <Button title="Contar un poco" color='#48BB78'/>
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
        marginRight: 25,
        marginLeft: 25
    },
    logo: {
        width: 150,
        height: 100,
    },
    p: {
        padding: 15,
        margin: 25
    },
    buttons:{
        padding: 24,
        paddingBottom: 60
    }
});

export default BasicFormScreen;
