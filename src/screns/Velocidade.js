import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from '../Components/Header'

export default props => {
    return (
        <View>
            <Header abrirDrawer={()=> props.navigation.openDrawer()}/>
       
        
        </View>
    )
}

const styles = StyleSheet.create({
    centralizartexto: {
        textAlign: 'center'
    },
    bottom:{
        marginBottom: 20,
    }
})