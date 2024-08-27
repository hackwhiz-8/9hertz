import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import image from '../assets/search.png'
import { imagrPath } from './imagesPath'

const Header = () => {
    return (
        <View style={[styles.headStyle]}>
            <Text style={{ fontSize: 25, color: 'black', fontWeight: '600' }}>Podline</Text>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>

                <Image source={imagrPath.search} style={{ width: 20, height: 20, }} />
                <Image source={imagrPath.bell} style={{ width: 20, height: 20 }} />
                <Image source={imagrPath.menu} style={{ width: 20, height: 20 }} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: 'lightgreen',

    }
})