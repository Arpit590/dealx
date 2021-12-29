import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import TransactionHeader from '../Atoms/Header'
import TransactionOption from './TransactionOption'

const TransactionScreen = () => {

    const [click, setClick] = useState("MyEarnings");
    // const [buying, setBuying] = useState(true)

    return (
        <View style={styles.screen}>
            <TransactionHeader
            logo
            />
            {/* <View style={styles.view2}>
                <TouchableOpacity activeOpacity={0.8} 
                onPress={()=>setBuying(true)}
                style={(buying) ? styles.activeBox :styles.box}>
                    <Text style={(buying) ? styles.activeText1 :styles.text}>Buying</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(!buying) ? styles.activeBox :styles.box}
                onPress={()=>setBuying(false)}
                >
                    <Text style={(!buying) ? styles.activeText1 :styles.text}>Selling</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.view}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>setClick("MyEarnings")}
                style={(click==="MyEarnings")? styles.activeContainer : styles.container}>
                    <Text style={(click==="MyEarnings")? styles.activeText : styles.text}>My Earnings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setClick("Purchase")}
                activeOpacity={0.8} style={(click==="Purchase")? styles.activeContainer : styles.container}>
                    <Text style={(click==="Purchase")? styles.activeText : styles.text}>Purchase Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>setClick("Invoices")}
                activeOpacity={0.8} style={(click==="Invoices")? styles.activeContainer : styles.container}>
                    <Text style={(click==="Invoices")? styles.activeText : styles.text}>Invoices</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal:20, paddingVertical:20}}>
                {(click==="MyEarnings") && 
                <>
                <TransactionOption
                title="Total Success Fee"
                color={colors.primary}
                price="150,000"
                />
                <TransactionOption
                title="Success Fee Paid"
                color="#27AE60"
                price="75,000"
                />
                <TransactionOption
                title="Success Fee Not Paid"
                color="#F2994A"
                price="75,000"
                />
                </>
                }
                {(click==="Purchase") &&
                <View style={{alignItems:"center", justifyContent:"center", marginTop:"40%"}}>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold, color:colors.textPrimary}}>Coming Soon</Text>
                </View>
                }
                {(click==="Invoices") &&
                <View style={{alignItems:"center", justifyContent:"center", marginTop:"40%"}}>
                    <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryBold, color:colors.textPrimary}}>Coming Soon</Text>
                </View>
                }
            </View>
        </View>
    )
}

export default TransactionScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    view:{
        backgroundColor:colors.secondary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:30
    },
    container:{
        borderBottomWidth:2, 
        borderBottomColor:colors.secondary,
        padding:10,
        alignItems:"center"
    },
    activeContainer:{
        borderBottomColor:colors.primary,
        borderBottomWidth:2,
        padding:10,
        alignItems:"center"
    },
    text:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.textLight
    },
    activeText:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.primary
    },
    activeText1:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.secondary
    },
    box:{
        backgroundColor:colors.secondary,
        paddingVertical:10,
        paddingHorizontal:30,
        elevation:4,
        borderRadius:3
    },
    activeBox:{
        backgroundColor:colors.primary,
        paddingVertical:10,
        paddingHorizontal:30,
        elevation:4,
        borderRadius:3
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.secondary,
        paddingHorizontal:30,
        paddingVertical:10,
        marginTop:-20
    }
})
