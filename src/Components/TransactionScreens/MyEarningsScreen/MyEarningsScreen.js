import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import MyEarningBody from './MyEarningBody'
import MyEarningsHeader from './MyEarningsHeader'



const MyEarningsScreen = () => {
    
    return (
        <View style={styles.screen}>
            <MyEarningsHeader/>
            <MyEarningBody/>
        </View>
    )
}

export default MyEarningsScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1,
        width:"100%"
    }
})
