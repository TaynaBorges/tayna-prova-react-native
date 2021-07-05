import React from 'react'
import { View, Text, StyleSheet , TouchableOpacity, Image} from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather'

import cara from '../../assets/images/profileimg.jpg'
import Input from '../Components/Input'

export default props => {
    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity style={styles.espaco} onPress={props.abrirDrawer}>
                <Icon name='menu' size={40}/>
            </TouchableOpacity >
        </View>
        <View style={styles.container2}>
            <Image source={cara} style={styles.imagem}/>
        </View>
        <View style={styles.arrumarInput}>
            <Input/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    espaco: {
        margin: 10
    },
    container2:{
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20
    },
    imagem:{
        width: 50,
        height: 50,
        marginBottom: 10,
        borderRadius: 80,
        top: -50
    },
    arrumarInput:{
        top: -40
    },
    arrumarInput2:{
        textAlign: 'center',
        justifyContent: 'center'
    }
})