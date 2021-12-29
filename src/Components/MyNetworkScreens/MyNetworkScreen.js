import React from 'react'
import { useState } from 'react'
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, CheckBox } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import {FontAwesome, MaterialIcons, Ionicons, Entypo, AntDesign} from "@expo/vector-icons"
import Header from '../Atoms/Header'
import { buyersData, sellersData } from './data'
import { useNavigation } from '@react-navigation/native'

const MyNetworkScreen = () => {

    const [isMyBuyers, setIsMyBuyers] = useState(true);
    const navigation = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const [isDate, setIsDate] = useState(true);
    const [isName, setIsName] = useState(false);
    const [isLocation, setIsLocation] = useState(false);
    const [isCompany, setIsCompany] = useState(false);

    const closeHandle = ()=>{
        setIsOpen(false);
    }

    const sortHandler1=()=>{
        setIsDate(true);
        setIsCompany(false);
        setIsLocation(false);
        setIsName(false);
    }

    const sortHandler2=()=>{
        setIsDate(false);
        setIsCompany(true);
        setIsLocation(false);
        setIsName(false);
    }

    const sortHandler3=()=>{
        setIsDate(false);
        setIsCompany(false);
        setIsLocation(true);
        setIsName(false);
    }

    const sortHandler4=()=>{
        setIsDate(false);
        setIsCompany(false);
        setIsLocation(false);
        setIsName(true);
    }

    const filterHandler=()=>{
        setIsOpen(false)
    }

    return (
        <View style={styles.screen}>
            <Header
            logo
            />
            <View style={styles.view}>
                <TouchableOpacity activeOpacity={0.8} 
                onPress={()=>setIsMyBuyers(true)}
                style={(isMyBuyers) ? styles.activeBox :styles.box}>
                    <Text style={(isMyBuyers) ? styles.activeText :styles.text}>My Buyers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={(!isMyBuyers) ? styles.activeBox :styles.box}
                onPress={()=>setIsMyBuyers(false)}
                >
                    <Text style={(!isMyBuyers) ? styles.activeText :styles.text}>My Sellers</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingRight:20, borderBottomWidth:1, borderBottomColor:"#000000"}}>
                <TouchableOpacity
                onPress={()=>setIsOpen(true)}
                activeOpacity={0.8} style={styles.filter}>
                    <FontAwesome
                    name="sort-amount-desc"
                    size={15}
                    color="#1A1A1A"
                    />
                    <Text style={{fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, fontSize: fontSize.h6, marginHorizontal:10}}>Sort by</Text>
                    <Text style={{fontSize:fontSize.h5, color:"#1A1A1A", fontFamily: fontFamily.primaryBold, marginRight:20}}>Date Added</Text>
                    <MaterialIcons
                    name="keyboard-arrow-down"
                    size={28}
                    color={colors.textPrimary}
                    />
                </TouchableOpacity>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Ionicons
                        name="person-add"
                        size={24}
                        color="#000000"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={{marginLeft:10}}>
                        <Entypo
                        name="dots-three-vertical"
                        color="#000000"
                        size={24}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {isMyBuyers ? 
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                {buyersData.map((person)=>(
                    <TouchableOpacity key={person.id} activeOpacity={0.8} 
                    onPress={()=>navigation.navigate("About", {"name": person.name, "company": person.company, "location": person.location, "title": "My Buyers"})}
                    style={{marginBottom:15,backgroundColor:"#FFFFFF", borderRadius:3, paddingHorizontal:15, paddingVertical:7}}>
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h3, color:colors.textPrimary, marginBottom:3}}>{person.name}</Text>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary}}>{person.company}</Text>
                            <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary}}>, {person.location}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            :
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                {sellersData.map((person)=>(
                    <TouchableOpacity key={person.id} activeOpacity={0.8} 
                    onPress={()=>navigation.navigate("About", {"name": person.name, "company": person.company, "location": person.location, "title": "My Sellers"})}
                    style={{marginBottom:15,backgroundColor:"#FFFFFF", borderRadius:3, paddingHorizontal:15, paddingVertical:7}}>
                        <Text style={{fontFamily:fontFamily.primaryBold, fontSize:fontSize.h3, color:colors.textPrimary, marginBottom:3}}>{person.name}</Text>
                        <View style={{flexDirection:"row", alignItems:"center"}}>
                            <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary}}>{person.company}</Text>
                            <Text style={{fontSize:fontSize.h5, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary}}>, {person.location}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            }
            <Modal
            animationType={"slide"}
            onRequestClose={closeHandle}
            transparent={true}
            visible={isOpen}
            >
                <View style={{alignItems:"center", marginHorizontal:20, width:"90%", flex:1, justifyContent:"flex-end"}}>
                    <View style={styles.modal}>
                        <View style={{flexDirection:"row", alignItems:"center", marginVertical:10, width:"100%", justifyContent:"space-between", borderBottomColor:colors.borderColor, borderBottomWidth:1, paddingBottom:20}}>
                            <Text style={{fontSize:fontSize.text, color:colors.textPrimary}}>Sort by</Text>
                            <TouchableOpacity activeOpacity={0.8} onPress={closeHandle}>
                                <AntDesign
                                name="close"
                                size={24}
                                color="#717171"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                            <View style={{}}>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Date Added</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={isDate}
                                    onValueChange={sortHandler1}
                                    />
                                </View>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Name</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={isName}
                                    onValueChange={sortHandler4}
                                    />
                                </View>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Company</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={isCompany}
                                    onValueChange={sortHandler2}
                                    />
                                </View>
                                <View style={styles.checkbox}>
                                    <Text style={{fontSize:fontSize.text, fontWeight:"400", fontFamily:fontFamily.primaryRegular, color:"#5A5A5A"}}>Location</Text>
                                    <CheckBox
                                    disabled= {false}
                                    value={isLocation}
                                    onValueChange={sortHandler3}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                            onPress={filterHandler}
                            activeOpacity={0.8} style={styles.button}>
                                <Text style={{fontFamily:fontFamily.primaryRegular, fontWeight:"600", fontSize:18, color:colors.secondary, paddingHorizontal:60}}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default MyNetworkScreen

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.screen,
        flex:1
    },
    view:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:colors.secondary,
        paddingHorizontal:30,
        marginTop:-20,
        paddingBottom:20
    },
    text:{
        fontSize:fontSize.h4,
        fontFamily:fontFamily.primaryRegular,
        color:colors.textLight
    },
    activeText:{
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
    filter:{
        flexDirection:"row",
        alignItems:"center",
        margin:15,
        backgroundColor:colors.secondary,
        borderWidth:1,
        borderColor:colors.primary,
        borderRadius:3,
        padding:10,
        alignSelf:"flex-end"
    },
    content:{
        marginVertical:10,
        paddingHorizontal:20,
        width:"100%",
        marginTop:20
    },
    modal:{
        flex:1,
        width:"100%",
        backgroundColor:"white",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginHorizontal:20,
        maxHeight: 350,
        elevation:5,
        padding:20,
        alignItems:"center"
    },
    view2:{
        width:"100%",
        marginVertical:10
    },
    checkbox:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:15
    },
    button:{
        backgroundColor:colors.primary,
        borderRadius:10,
        paddingVertical:10,
        alignSelf:"center"
    }
})
