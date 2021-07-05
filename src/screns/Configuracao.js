import React from 'react'
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native'

import Header from '../Components/Header'
import Cards from '../Components/cards'

export default props => {
    return (
        <ScrollView>
            <Header abrirDrawer={()=> props.navigation.openDrawer()}/>
            <Cards/>
            <Cards/>
            <Cards/>
        </ScrollView>
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