import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import {Ionicons, Octicons, AntDesign, MaterialIcons} from "@expo/vector-icons";
import Header from '../../Components/Atoms/Header'

const {width} = Dimensions.get("window")

const AboutScreen = () => {

    const route = useRoute();
    const [click, setClick] = useState("About");
    
    return (
        <View style={styles.screen}>
            <View style={styles.view}>
                <Header
                headingText={route.params.title}/>
                <View style={styles.content}>
                    <Ionicons
                    name="person-circle-sharp"
                    color="#C4C4C4"
                    size={50}
                    />
                    <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h5, color:colors.textPrimary}}>{route.params.name}</Text>
                    <View style={{ width:width-130,flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginVertical:10}}>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:colors.primary, padding:10, borderRadius:20}}>
                                <Ionicons
                                name="call"
                                size={20}
                                color={colors.secondary}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:5,fontSize:fontSize.h5, color:colors.primary, fontFamily: fontFamily.primaryRegular}}>Call</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:colors.primary, padding:10, borderRadius:20}}>
                                <Octicons
                                name="mail-read"
                                size={20}
                                color={colors.secondary}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:5,fontSize:fontSize.h5, color:colors.primary, fontFamily: fontFamily.primaryRegular}}>E-mail</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:colors.primary, padding:10, borderRadius:20}}>
                                <AntDesign
                                name="plus"
                                size={20}
                                color={colors.secondary}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:5,fontSize:fontSize.h5, color:colors.primary, fontFamily: fontFamily.primaryRegular}}>Create Deal</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:colors.primary, padding:10, borderRadius:20}}>
                                <MaterialIcons
                                name="edit"
                                size={20}
                                color={colors.secondary}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:5,fontSize:fontSize.h5, color:colors.primary, fontFamily: fontFamily.primaryRegular}}>Edit</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:colors.primary, padding:10, borderRadius:20}}>
                                <AntDesign
                                name="delete"
                                size={20}
                                color={colors.secondary}
                                />
                            </TouchableOpacity>
                            <Text style={{marginTop:5,fontSize:fontSize.h5, color:colors.primary, fontFamily: fontFamily.primaryRegular}}>Delete</Text>
                        </View>
                    </View>
                    <View style={styles.tab}>
                        <TouchableOpacity
                        onPress={()=>setClick("About")}
                        activeOpacity={0.8} style={(click==="About")? styles.activeContainer : styles.container}>
                            <Text style={(click==="About")? styles.activeText : styles.text}>About</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>setClick("Linked Deals")} 
                        activeOpacity={0.8} style={(click==="Linked Deals")? styles.activeContainer : styles.container}>
                            <Text style={(click==="Linked Deals")? styles.activeText : styles.text}>Linked Deals</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:25, marginHorizontal:20}}>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Name</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>{route.params.name}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Company</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>{route.params.company}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Phone Number</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>+1149899876728</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Email ID</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>dummy@forbesmarshall.com</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Address</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>Street 429, Opposite RBI Bank</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>Pin: 10110</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}>{route.params.location}</Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Website</Text>
                    <Text style={{fontSize:fontSize.h4, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginTop:2}}></Text>
                </View>
                <View style={styles.box}>
                    <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryBold, color: colors.textPrimary}}>Company Profile</Text>
                    <TouchableOpacity activeOpacity={0.8} style={{flexDirection:"row", alignItems:"center", borderWidth:1, borderColor:colors.primary,borderRadius:3, padding:15, marginTop:20, marginBottom:10, justifyContent:"center"}}>
                        <AntDesign
                        name="plus"
                        size={20}
                        color={colors.primary}
                        />
                        <Text style={{fontFamily:fontFamily.primaryRegular, color:colors.primary, fontSize:fontSize.h4, marginLeft:20}}>Add Company Profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    view:{
        backgroundColor:colors.secondary
    },
    content:{
        alignItems:"center",
        width:width
    },
    tab:{
        backgroundColor:colors.secondary,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:width-100,
        marginTop:10
    },
    text:{
        fontSize:fontSize.h3,
        fontFamily:fontFamily.primaryRegular,
        color:colors.textLight
    },
    activeText:{
        fontSize:fontSize.h3,
        fontFamily:fontFamily.primaryRegular,
        color:colors.primary
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
    box:{
        backgroundColor:colors.secondary,
        paddingHorizontal:15, 
        paddingVertical:10,
        borderRadius:3,
        marginBottom:15
    }
})
