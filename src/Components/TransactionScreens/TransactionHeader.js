import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialIcons, Feather} from "react-native-vector-icons";
import { colors, fontFamily, fontSize } from '../../commonStyle';
import TransactionTab from './TransactionTab';


const TransactionHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.view}>
                <View style={styles.view1}>
                    <Text style={{fontSize:fontSize.text, fontFamily:fontFamily.secondaryMd, color:colors.textPrimary, fontWeight:"bold"}}>Transactions</Text>
                    <TransactionTab
                    text1="Buying"
                    Tab1="TransactionBuying"
                    text2="Selling"
                    Tab2="TransactionSelling"
                    />
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
                    <View>
                        <MaterialIcons
                        name="notifications"
                        color="white"
                        size={20}
                        />
                        <Image
                        source={require("../../assets/dot.png")}
                        style={{height:8, width:8, resizeMode:"contain", position:"absolute", right:0}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.search}>
                <View style={styles.input}>
                    <Feather
                    name="search"
                    size={20}
                    color={colors.screen}
                    />
                    <TextInput
                    placeholder="Search by keyword"
                    placeholderTextColor="#1A1A1A9E"
                    keyboardType="default"
                    style={{marginLeft:12, fontSize:fontSize.h4}}
                    />
                </View>
                <TouchableOpacity activeOpacity={0.8} style={styles.filter}>
                    <Image
                    source={require("../../assets/filter.png")}
                    />
                    <Text style={{color: colors.textPrimary, fontWeight:"900", fontFamily:fontFamily.secondaryMd, fontSize:fontSize.h5, marginLeft:10,}}>Filters</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TransactionHeader

const styles = StyleSheet.create({
    header:{
        backgroundColor:"white",
        padding:22,
        width:"100%" ,
    },
    view:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between"
    },
    view1:{
        alignItems:"flex-start",
    },
    icon:{
        backgroundColor:colors.primary,
        borderRadius:30,
        padding:6
    },
    search:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    input:{
        flexDirection:"row",
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.borderColor,
        backgroundColor:colors.secondary,
        borderRadius:4,
        padding:6,
        flex:1
    },
    filter:{
        backgroundColor:"#F3F3F3",
        borderRadius:3,
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:14,
        paddingHorizontal:15,
        marginLeft:23,
    }
})
