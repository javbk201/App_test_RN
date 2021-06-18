import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';


const AdvanceFormScreen = () => {
   return(
     <View style={styles.container}>
        <Text>Advance Form Screen</Text>
     </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AdvanceFormScreen;
