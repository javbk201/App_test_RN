import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    Image,
    TextInput
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Input, Icon } from 'react-native-elements';
import ModalSelector from 'react-native-modal-selector';

const BasicFormScreen = (props) => {

   const cuidad = [
        {key: 1, label:'Baranquilla'},
        {key: 2, label:'Medellín'},
        {key: 3, label:'Santa Marta'},
        {key: 4, label:'Bogota'},
    ];

   const [selectedCity, setSelectedCity] = useState('Medellín');

   const [userData, setUserData] = useState({
       name: '',
       email: '',
       ciudad: selectedCity,
       sector: '',
    });
   const handleChangeText = (data, value) =>{
       setUserData({ ...userData, [data]: value });
    };

   return(
     <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Image source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={styles.logo} />
        </View>
        <View style={styles.p}>
            <Text style={styles.highlightText}>Datos Personales</Text>
            <Text style={styles.lightText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</Text>
        </View>
        <View style={styles.p}>
            <Input
                label='Nombre'
                labelStyle={{ color: '#000' }}
                placeholder='Pedro Ramirez'
                onChangeText={(value)=> handleChangeText('name', value)}
                />
            <Input
                label='Email'
                labelStyle={{ color: '#000' }}
                placeholder='pedro@mail.com'
                onChangeText={(value)=> handleChangeText('email', value)}
                />
            <ModalSelector
            data={cuidad}
            initValue='Medellín'
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option) => {setSelectedCity(option.label)}}
            >
                <Input
                    editable={false}
                    label='Cuidad'
                    labelStyle={{ color: '#000' }}
                    placeholder='Medellín'
                    value={selectedCity}
                    rightIcon={{name: 'angle-down', type: 'font-awesome'}}
                    />
            </ModalSelector>
            <Input
                label='Sector o barrio'
                labelStyle={{ color: '#000' }}
                placeholder='Poblado'
                onChangeText={(value)=> handleChangeText('sector', value)}/>
        </View>
        <View style={styles.buttons}>
        <Button
            title="Siguiente"
            color="#16d967"
            onPress={() => props.navigation.navigate("HomeScreen", {
                imageRoute: props.route.params.imageRoute,
                userName: userData.name
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
        resizeMode: 'contain'
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
