import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fontFamily, levels } from '../../commonStyle'

export default NetworkFailurePopup = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.error}>
                error
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding:levels.l4,
        backgroundColor:colors.alert,
        textAlign:'center',
        borderColor:colors.alert,
        borderRadius:5,
        position:'absolute',
        bottom:levels.l7,
        left:levels.l4,
        right:levels.l4,
        zIndex:10,
        fontFamily:fontFamily.tertiaryMd
    },
    error : {
        color:colors.secondary,
        textAlign:'center',
    }
})