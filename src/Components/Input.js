import React, {useState} from 'react'
import { View, Text, TextInput , StyleSheet, TouchableOpacity} from 'react-native'
import  Icon  from 'react-native-vector-icons/Feather'

export default props => {
    const [nome, setNome] = useState('')

    return (
        <View style={styles.centralizar}>
            <View style={[styles.tamanho, styles.cor]}>
                <TextInput
                style={styles.padding}
                placeholder="Search Here..."
                value={nome}
                onChangeText={nome => setNome(nome)}
                />
                <TouchableOpacity style={styles.arrumarImg}>
                    <Icon name='search' size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tamanho: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 20
    },
    cor:{
        backgroundColor: '#ccc',
        borderRadius: 4
    },
    padding:{
        padding: 10,
        paddingLeft: 40
    },
    arrumarImg:{
        justifyContent: 'center'
    },
    centralizar:{
        alignItems: 'center'
    }
})