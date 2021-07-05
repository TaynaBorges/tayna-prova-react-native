import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


export default props => {
    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <Image source={props.Image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        padding: 20,
    },
    container: {
        backgroundColor: '#ccc',
        width: '100%',
        height: 550,
    }
})