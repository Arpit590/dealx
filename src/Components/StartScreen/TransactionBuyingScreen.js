import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontSize } from '../../commonStyle'
import TransactionOptions from './TransactionOptions'
import TransactionTab from './TransactionTab'

const TransactionBuyingScreen = () => {

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TransactionTab/>
                <View style={styles.button}>
                    <TransactionOptions
                    text="Total Success Fee"
                    price="150,000"
                    priceColor={colors.primary}
                    />
                    <TransactionOptions
                    text="Success Fee Paid"
                    price="75,000"
                    priceColor="#27AE60"
                    />
                    <TransactionOptions
                    text="Total Success Fee"
                    price="150,000"
                    priceColor="#F2994A"
                    />
                </View>
            </View>
        </View>
    )
}

export default TransactionBuyingScreen

const styles = StyleSheet.create({
    screen:{
        alignItems:"center",
        backgroundColor: colors.screen,
        flex:1,
    },
    container:{
        alignItems:"center"
    },
    button:{
        flex:1,
        marginVertical:12,
        alignItems:"center",
        flexDirection:"column"
    }
})
