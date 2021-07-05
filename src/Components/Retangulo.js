import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default props => {
    return (
        <View style={styles.containerPrincipal}>
            <TouchableOpacity style={styles.container}>
                <Text>{props.numero}</Text>
                <Text>{props.nome}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerPrincipal:{
        padding: 20
    },
    container: {
        borderColor: '#ccc',
        borderTopColor:'#4755ab',
        borderRadius: 10,
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 30
    }
})