import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Card from './Card'
import { cardImages } from './imagesPath'


const UpperSection = () => {
    const [button, setbutton] = useState('ep')
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, marginTop: 10, padding: 20, }}>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>For you</Text>
                <Text style={{ fontSize: 18, color: 'gray', borderBottomWidth: 1, borderColor: 'gray' }}>Recommendation</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', gap: 10, margin: 10 }}>
                <Text onPress={() => setbutton('ep')} style={button === 'ep' ? styles.buttonchk : styles.buttonUnchk}>Episodes</Text>
                <Text onPress={() => setbutton('qt')} style={button === 'qt' ? styles.buttonchk : styles.buttonUnchk}>quotes</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={cardImages}
                    renderItem={({ item, index }) => <Card key={index} image={item.url} />}
                />
            </View>
        </View>
    )
}

export default UpperSection

const styles = StyleSheet.create({
    buttonchk: {
        color: 'black',
        borderBottomWidth: 1,
        borderColor: 'gray',
        color: 'black',
        padding: 5,
        fontSize: 17,
        backgroundColor: 'lightgreen',
        borderRadius: 5
    },
    buttonUnchk: {
        color: 'white',
        padding: 5,
        borderBottomWidth: 0,
        color: 'white'
    }
})