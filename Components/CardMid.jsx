import { View, Text, Image } from 'react-native'
import React from 'react'


const CardMid = (props) => {
    return (
        <View style={{flex:1, width: 150, margin: 30 }}>
            <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center'}}>
                <Image source={props.image} style={{ width: 100, height: 100, borderRadius: 99, zIndex: 1, }} />
                <View style={{position:'absolute' }}>
                    <Text style={{ color: 'black', textAlign: 'center', paddingBottom: 10, paddingTop: 50, borderWidth: 1, borderRadius: 15 }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, itaque.
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default CardMid