import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView} from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather'
import Header from '../Components/Header'
import Retangulo from '../Components/Retangulo'


export default props => {
    return (
        <ScrollView>
            <View style={styles.container}>
            <Header abrirDrawer={()=> props.navigation.openDrawer()}/>
            <View>
            <Text style={[styles.centralizartextoInicial, styles.bottom, styles.width]}>Hi John, Welcome back</Text>
            <Text style={styles.centralizartexto}>Very detailed & featured admin.</Text>
            </View>
            <View>
            <Retangulo numero='29.75 M' nome='Total Users'/><Icon style={styles.icons} name='users' size={40}/>
            <Retangulo numero='51.25 K' nome='Daily Visitors'/><Icon style={styles.icons} name='eye' size={40}/>
            <Retangulo numero='166.89 M' nome='Downloads'/><Icon style={styles.icons} name='cloud' size={40}/>
            <Retangulo numero='1,250 k' nome='Purchased'/><Icon style={styles.icons} name='shopping' size={40}/>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    centralizartextoInicial: {
        textAlign: 'left',
        fontSize: 23,
        paddingLeft: 20
    },
    centralizartexto: {
        textAlign: 'left',
        paddingLeft: 20,
        top: -20
    },
    bottom:{
        marginBottom: 20,
    },
    icons:{
        position: 'relative',
        left: 80,
        top: -120
    },
    retangulo:{
        top: -10,
    }

})