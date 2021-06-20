import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';

import {
    Input,
    Avatar,
    CheckBox,
    ListItem,
    ThemeProvider
} from 'react-native-elements';
import { Form, FormItem } from 'react-native-form-component';


const AdvanceFormScreen = (props) => {
   return(
     <ScrollView style={{backgroundColor: '#fff'}}>
        <View style={styles.container}>
            <Image source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={styles.logo} />
        </View>
        <View style={styles.p}>
            <Text style={styles.highlightText}>¿Qué tipo de <Text style={styles.innerText}>jugador</Text> eres?</Text>
        </View>
        <View style={styles.containerAvatar}>
            <Avatar
            rounded
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            size="large"
            />
            <View style={{padding:10}}>
                <Text>¡Hola!</Text>
                <Text>Pedro Ramirez</Text>
            </View>
        </View>
         <View style={styles.formRow}>
            <Input label='Edad' placeholder='25 años' labelStyle={{ color: '#000' }}/>
            <Input label='Genero' placeholder='x'labelStyle={{ color: '#000' }}/>
        </View>
        <View style={styles.form}>
            <Input label='Frecuencia con la que juega' placeholder='Todos los dias' labelStyle={{ color: '#000' }}/>
            <Input label='¿Cuál es su posición?' placeholder='Delantero' labelStyle={{ color: '#000' }}/>
            <Input label='¿Cuál es tu pierna hábil?' placeholder='Derecha' labelStyle={{ color: '#000' }}/>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign:'center'}}>¿Qué tipo de características tienes?(Máximo de 3)</Text>
        </View>
        <View style={styles.checkBox}>
            <View>
                <CheckBox
                    title='Veloz'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}/>
                <CheckBox
                    title='Rematador - Definidor'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150,  backgroundColor: '#fff', borderWidth: 0}}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Visión de juego - Asistidor'
                    containerStyle={{maxWidth: 150,  backgroundColor: '#fff', borderWidth: 0}}/>
            </View>
            <View>
                <CheckBox
                    title='Encarador - Ágil'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Fuerte - Agerrido'
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Técnico'
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}/>
            </View>
        </View>
        <View style={styles.buttons}>
        <Button
            title="Finalizar"
            color="#16d967"
            onPress={() => props.navigation.navigate("UploadImageScreen")} />
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
    containerAvatar: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
        width: 100,
        height: 75,
        resizeMode: 'contain'
    },
    formRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginRight: 90,
        marginLeft: 90,
        flexDirection: 'row'
    },
    form:{
        flex: 1,
        justifyContent:'center',
        paddingRight: 15,
        paddingLeft: 15,
    },
    p: {
        padding: 15,
    },
    buttons:{
        padding: 24,
        paddingBottom: 60
    },
    checkBox:{
        padding: 20,
        flexDirection: 'row'
    }
});


export default AdvanceFormScreen;
