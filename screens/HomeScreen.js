import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';


const HomeScreen = (props) => {
   return(
     <ScrollView>
     <View style={styles.container}>
        <View>
            <Image source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}} style={styles.logo} />
        </View>
        <View>
            <Image source={{uri: 'https://image.freepik.com/vector-gratis/jugador-futbol-masculino-dibujos-animados_33070-828.jpg'}} style={styles.imagePlayer}/>
        </View>
        <View style={styles.p}>
        <Text style={styles.highlightText}>¿Qué tipo de <Text style={styles.innerText}>jugador</Text> eres?</Text>
        <Text style={styles.lightText}>Para poder ofrecerte un mejor servicio, cuéntanos que tipo de jugador eres</Text>
        </View>
        <View style={styles.buttons}>
        <Button
            title="Contar un poco"
            color='#16d967'
            onPress={() => props.navigation.navigate("AdvanceFormScreen", { imageRoute: props.route.params.imageRoute, userName: props.route.params.userName })}/>
        <TouchableOpacity><Text style={{textAlign: 'center'}}>Revisar más tarde</Text></TouchableOpacity>
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
        backgroundColor: '#fff'
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
        marginRight: 15,
        marginLeft: 15
    },
    imagePlayer:{
        width: 200,
        height: 300,
        paddingBottom: 5,
        resizeMode: 'contain'
    },
    logo: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    p: {
        padding: 25,
        margin: 14,
    },
    buttons:{
        paddingTop: 24,
        paddingBottom: 60
    }
});

export default HomeScreen;
