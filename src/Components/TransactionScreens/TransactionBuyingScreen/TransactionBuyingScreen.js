import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors, fontSize} from '../../../commonStyle'
import TransactionHeader from '../TransactionHeader'
import TransactionOptions from '../TransactionOptions'
import TransactionTab from '../TransactionTab'

const TransactionBuyingScreen = () => {

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
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Total Success Fee"
                    price="100,000"
                    priceColor={colors.primary}
                    />
                    <TransactionOptions
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Success Fee Paid"
                    price="50,000"
                    priceColor="#27AE60"
                    />
                    <TransactionOptions
                    size={fontSize.h1}
                    filterText="Buying"
                    text="Success Fee Not Paid"
                    price="50,000"
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
