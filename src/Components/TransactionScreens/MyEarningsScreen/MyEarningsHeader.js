import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../../commonStyle'
import {AntDesign, MaterialIcons} from "react-native-vector-icons";
import { useNavigation, useRoute } from '@react-navigation/core';
import { useSelector } from 'react-redux';

const MyEarningsHeader = () => {

    const [{text}] = useSelector((state)=> state.transaction.transaction)
    const navigation = useNavigation();
    
    return (
        <View style={styles.header}>
            <View style={styles.view1}>
                <TouchableOpacity activeOpacity={0.8}
                onPress={()=>navigation.goBack()}
                style={styles.view}>
                    <AntDesign
                    name="left"
                    color="#007AFF"
                    size={20}
                    />
                    <Text style={{color: "#007AFF", fontSize:fontSize.h1, marginLeft:5}}>My Earnings</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.icon}>
                    <View>
                        <MaterialIcons
                        name="notifications"
                        color="white"
                        size={20}
                        />
                        <Image
                        source={require("../../../assets/dot.png")}
                        style={{height:6, width:6, resizeMode:"contain", position:"absolute", right:0}}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Text style={styles.text}>{text}</Text>
                <TouchableOpacity activeOpacity={0.8} style={styles.filter}>
                    <Image
                    source={require("../../../assets/filter.png")}
                    />
                    <Text style={{color: colors.textPrimary, fontWeight:"900", fontFamily:fontFamily.secondaryMd, fontSize:fontSize.h5, marginLeft:10,}}>Filters</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyEarningsHeader

const styles = StyleSheet.create({
    header:{
        alignItems:"flex-start",
        backgroundColor:colors.secondary,
        width:"100%",
        justifyContent:"space-between",
        padding:20,
    },
    view1:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        width:"100%"
    },
    view:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:26
    },
    view2:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%"
    },
    text:{
        fontSize: fontSize.text,
        color: colors.textPrimary,
        fontFamily: fontFamily.secondaryMd,
        fontWeight:"bold"

    },
    headerRight:{
    },
    icon:{
        backgroundColor:colors.primary,
        borderRadius:30,
        padding:6
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
