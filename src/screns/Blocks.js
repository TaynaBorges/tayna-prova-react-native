import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

import Header from '../Components/Header'
import Input from '../Components/Input'


export default props => {
    return (
        <View style={styles.container}>
            <Header abrirDrawer={()=> props.navigation.openDrawer()}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centralizartexto: {
        textAlign: 'center'
    },
    bottom:{
        marginBottom: 20,
    },
    arrumarInput:{
        marginLeft: 30
    }
})