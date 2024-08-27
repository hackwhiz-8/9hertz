import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { cardPath } from './imagesPath'

const Card = (props) => {
    return (
        <View style={[styles.box, styles.boxShadow, styles.android]}>

            <Image source={props.image} style={{ width: 200, height: 130, borderRadius: 10, }} />

            <Text style={{ color: 'white', textAlign: 'center', padding: 10, paddingTop: 20 }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.
            </Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        width: 250,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15
    },
    android: {
        backgroundColor: 'black',

        elevation: 10
    }
})