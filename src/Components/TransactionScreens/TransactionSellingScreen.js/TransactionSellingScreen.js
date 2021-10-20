import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors, fontSize } from '../../../commonStyle'
import TransactionHeader from '../TransactionHeader'
import TransactionOptions from '../TransactionOptions'
import TransactionTab from '../TransactionTab'

const TransactionSellingScreen = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <TransactionHeader/>
                <TransactionTab
                text1="My Earnings"
                text2="Purchase Orders"
                text3="Invoices"
                />
                <View style={styles.button}>
                    <TransactionOptions
                    text="Total Success Fee"
                    size={fontSize.h1}
                    filterText="Selling"
                    price="150,000"
                    priceColor={colors.primary}
                    />
                    <TransactionOptions
                    text="Success Fee Paid"
                    size={fontSize.h1}
                    filterText="Selling"
                    price="75,000"
                    priceColor="#27AE60"
                    />
                    <TransactionOptions
                    text="Success Fee Not Paid"
                    size={fontSize.h1}
                    filterText="Selling"
                    price="75,000"
                    priceColor="#F2994A"
                    />
                </View>
            </View>
        </View>
    )
}

export default TransactionSellingScreen

const styles = StyleSheet.create({
    screen:{
        alignItems:"center",
        backgroundColor: colors.screen,
        flex:1,
        width:"100%"
    },
    container:{
        alignItems:"center",
        width:"100%"
    },
    button:{
        flex:1,
        marginVertical:12,
        alignItems:"center",
        flexDirection:"column"
    }
})
