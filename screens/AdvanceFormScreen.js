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
import ModalSelector from 'react-native-modal-selector';
import {
    Input,
    Avatar,
    CheckBox,
    ListItem,
    ThemeProvider
} from 'react-native-elements';
import { Form, FormItem } from 'react-native-form-component';


const AdvanceFormScreen = (props) => {

    const [check, toggleCheck] = useState({
        veloz: false,
        rematador: false,
        asistidor: false,
        agil: false,
        fuerte: false,
        tecnico: false
    });

    const genero = [
        {key: 1, label:'Masculino'},
        {key: 2,  label:'Femenino'},
        {key: 3, label:'Otro'},

    ];
    const frecuency = [
        {key: 1, label:'Una vez al mes'},
        {key: 2, label:'Dos veces al mes'},
        {key: 3, label:'Tres más veces al mes'},
    ];
    const posicion = [
        {key: 1, label:'Delantero'},
        {key: 2, label:'Defensa'},
        {key: 3, label:'Medio Campista'},
        {key: 4, label:'Portero'},
    ];
    const pierna = [
        {key: 1, label:'Izquierdo'},
        {key: 2, label:'Derecho'},
    ];

    const [formData, setFormData] = useState({
        edad: '',
        genero: 'Masculino',
        frecuenciaDeJuego: 'Una vez al mes',
        posicion: 'Delantero',
        pierna: 'Derecho',
    });

    const handleFormData = (data, value) =>{
        setFormData({ ...formData, [data]: value });
    }


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
                source={{ uri:
                    props.route.params.imageRoute !== null
                    ? props.route.params.imageRoute
                    : 'https://picsum.photos/200/200'
                }}
                size="large"
            />
            <View style={{padding:10}}>
                <Text>¡Hola!</Text>
                <Text>{props.route.params.userName}</Text>
            </View>
        </View>
         <View style={styles.formRow}>
           <View style={{flex:0.5}}>
            <Input
                label='Edad'
                placeholder='25 años'
                labelStyle={{color: '#000' }}
                onChangeText={(value)=> handleFormData('edad', value)}/>
           </View>
           <View style={{flex:0.5}}>
            <ModalSelector
                data={genero}
                initValue='Masculino'
                supportedOrientations={['landscape']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option) => handleFormData('genero', option.label)}>
                <Input
                    style={{flex:1}}
                    editable={false}
                    label='Genero'
                    placeholder='Masculino'
                    labelStyle={{ color: '#000' }}
                    rightIcon={{name: 'angle-down', type: 'font-awesome'}}
                    value={formData.genero}
                />
            </ModalSelector>
            </View>
        </View>
        <View style={styles.form}>
          <ModalSelector
            data={frecuency}
            initValue='Una vez al mes'
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option) => handleFormData('frecuenciaDeJuego', option.label)}>
            <Input
                editable={false}
                label='Frecuencia con la que juega'
                placeholder='Una vez al mes'
                labelStyle={{ color: '#000' }}
                rightIcon={{name: 'angle-down', type: 'font-awesome'}}
                value={formData.frecuenciaDeJuego}/>
          </ModalSelector>
          <ModalSelector
            data={posicion}
            initValue='Delantero'
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option) => handleFormData('posicion', option.label)}>
            <Input
                editable={false}
                label='¿Cuál es su posición?'
                placeholder='Delantero'
                labelStyle={{ color: '#000' }}
                rightIcon={{name: 'angle-down', type: 'font-awesome'}}
                value={formData.posicion}/>
           </ModalSelector>
           <ModalSelector
             data={pierna}
            initValue='Derecho'
            supportedOrientations={['landscape']}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option) => handleFormData('pierna', option.label)}>
            <Input
                editable={false}
                label='¿Cuál es tu pierna hábil?'
                placeholder='Derecha'
                labelStyle={{ color: '#000' }}
                rightIcon={{name: 'angle-down', type: 'font-awesome'}}
                value={formData.pierna}/>
           </ModalSelector>
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign:'center'}}>¿Qué tipo de características tienes?(Máximo de 3)</Text>
        </View>
        <View style={styles.checkBox}>
            <View>
                <CheckBox
                    title='Veloz'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.veloz}
                    onPress={() => toggleCheck({...check, veloz: !check.veloz})}/>
                <CheckBox
                    title='Rematador - Definidor'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150,  backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.rematador}
                    onPress={() => toggleCheck({...check, rematador: !check.rematador})}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Visión de juego - Asistidor'
                    containerStyle={{maxWidth: 150,  backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.asistidor}
                    onPress={() => toggleCheck({...check, asistidor: !check.asistidor})}/>
            </View>
            <View>
                <CheckBox
                    title='Encarador - Ágil'
                    textStyle={{textAlign: 'justify'}}
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.agil}
                    onPress={() => toggleCheck({...check, agil: !check.agil})}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Fuerte - Agerrido'
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.fuerte}
                    onPress={() => toggleCheck({...check, fuerte: !check.fuerte})}/>
                <CheckBox
                    textStyle={{textAlign: 'justify'}}
                    title='Técnico'
                    containerStyle={{maxWidth: 150, backgroundColor: '#fff', borderWidth: 0}}
                    checked={check.tecnico}
                    onPress={() => toggleCheck({...check, tecnico: !check.tecnico})} />
            </View>
        </View>
        <View style={styles.buttons}>
        <Button
            title="Finalizar"
            color="#16d967"
            onPress={() => {
                            console.log(formData);
                            props.navigation.navigate("UploadImageScreen");
                }
            }/>
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
        marginRight: 45,
        marginLeft: 45,
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
