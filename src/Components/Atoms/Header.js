import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle';
import {AntDesign, MaterialIcons, Ionicons} from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/core';
// import NotificationIcon from "../../../../assets/icons/icons8-notification.svg" 

const Header = ({logo, headingText}) => {

    const navigation = useNavigation();


    return (
        <View style={styles.container1}>
            {logo ? 
            <View style={styles.view1}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image
                    source={require("../../../assets/logo.png")}
                    style={{height:30, width:30, resizeMode:"contain",marginRight:10}}
                    />
                    <Text style={{fontSize:fontSize.text, fontFamily: fontFamily.primaryBold, color: "#1A1A1A"}}>worldref</Text>
                    <Image
                    source={require("../../../assets/dealx.png")}
                    style={{height:70, width:70, resizeMode:"contain", marginTop:8}}
                    />
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    >
                    <AntDesign
                    name="search1"
                    size={30}
                    color={colors.textPrimary}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <Ionicons
                        name="notifications-outline"
                        color={colors.textPrimary}
                        size={30}
                        />
                        {/* <NotificationIcon
                        height={40}
                        /> */}
                        <View style={{width:15, height:15,alignItems:"center", justifyContent:"center",backgroundColor:"#FA0000", padding:3, borderRadius:45, position:"absolute", right: 0}}>
                            <Text style={{fontSize:fontSize.h7, fontFamily:fontFamily.primaryRegular, color:colors.secondary}}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                        source={require("../../../assets/Avatar.png")}
                        style={{height:30, width:30, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={styles.view1}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                        <MaterialIcons
                        name="arrow-back-ios"
                        size={24}
                        color={colors.primary}
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily: fontFamily.primaryBold, fontSize:18, color:colors.textPrimary}}>{headingText}</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}
                    >
                    <AntDesign
                    name="search1"
                    size={30}
                    color={colors.textPrimary}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.notification}>
                        <Ionicons
                        name="notifications-outline"
                        color={colors.textPrimary}
                        size={30}
                        />
                        <View style={{width:15, height:15,alignItems:"center", justifyContent:"center",backgroundColor:"#FA0000", padding:3, borderRadius:45, position:"absolute", right: 0}}>
                            <Text style={{fontSize:fontSize.h7, fontFamily:fontFamily.primaryRegular, color:colors.secondary}}>4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                        source={require("../../../assets/Avatar.png")}
                        style={{height:30, width:30, resizeMode:"contain"}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.secondary,
        padding:20,
        marginTop:"-5%"
    },
    container1:{
        backgroundColor:colors.secondary,
        padding:20, 
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    notification:{
        flexDirection:"row",
        marginHorizontal:20
    }
})
