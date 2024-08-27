import { View, Text, FlatList, ScrollView, Image } from 'react-native'
import React from 'react'
import { middleImage } from './imagesPath'
import CardMid from './CardMid'


const MiddleSec = () => {

    const CardMid = ({ item, index }) => {
        return (
            <View style={{ flex: 1, alignItems: 'center', width: 200, marginTop: 20, margin: 10, height: 200 }}>
                <Image source={item.url} style={{ width: 100, height: 100, borderRadius: 80, zIndex: 1 }} />
                <View style={{ position: 'absolute', top: 50 }}>
                    <Text style={{
                        color: 'black',
                        textAlign: 'center',
                        paddingBottom: 10,
                        paddingTop: 50,
                        borderWidth: 1,
                        borderRadius: 15,
                        backgroundColor:'lightgreen'
                    }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.
                    </Text>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1, margin: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 22, color: 'white', fontWeight: '500', marginBottom: 20, marginTop: 10 }}>Treding Quotes</Text>
            <View style={{ flex: 1 }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={middleImage}
                    renderItem={CardMid}
                />
            </View>
        </View>
    )
}

export default MiddleSec