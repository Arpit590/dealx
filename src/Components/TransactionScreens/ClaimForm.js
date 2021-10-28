import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, CheckBox , TouchableOpacity, View } from 'react-native'
import { colors, fontFamily, fontSize } from '../../commonStyle'
import {AntDesign} from "react-native-vector-icons";


const ClaimForm = () => {

    const navigation = useNavigation();
    const [checkBoxToggle, setCheckBoxToggle] = useState(false);

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <View style={styles.view1}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <AntDesign
                        name="left"
                        color={colors.primary}
                        size={24}
                        />
                    </TouchableOpacity>
                    <Text style={{fontFamily: fontFamily.primaryRegular, fontSize: fontSize.h1, color: colors.primary, marginLeft:5 }}>Electrical Spares</Text>
                </View>
                <Text style={{fontFamily:fontFamily.secondaryMd, fontSize: fontSize.text, color: colors.textPrimary, fontWeight:"bold"}}>Success Fee Claim Form</Text>
            </View>
            <ScrollView>
                <View style={styles.view2}>
                    <View style={styles.container}>
                        <Text numberOfLines={2} style={{fontSize: fontSize.h2, fontFamily: fontFamily.primaryRegular, marginBottom:5, fontWeight:"bold"}}>Requirement of Electrical Spares at Surabaya for Hydro Plant</Text>
                        <View style={styles.text}>
                            <Text style={{fontSize: fontSize.h3, fontFamily: fontFamily.primaryRegular, marginBottom:10, fontWeight:"400"}}>Deal No.: </Text>
                            <Text style={{fontSize: fontSize.h4, fontFamily: fontFamily.primaryRegular, marginBottom:10, fontWeight:"bold"}}>14294792</Text>
                        </View>
                        <Text style={{fontSize: fontSize.h3, fontFamily: fontFamily.primaryRegular}}>10 June 2021</Text>
                    </View>
                    <View style={styles.view3}>
                        <View style={{flexDirection:"row", alignItems:"center", marginBottom:10}}>
                            <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryRegular, fontWeight:"bold", color:"#1A1A1A"}}>Claim Form for </Text>
                            <Text style={{fontSize:fontSize.h1, fontFamily:fontFamily.primaryRegular, fontWeight:"600", color: colors.primary}}>$ 15,000</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.edit}>
                            <AntDesign
                            name="edit"
                            color={colors.primary}
                            size={20}
                            />
                            <Text style={{fontSize:fontSize.h4, color:colors.primary, fontFamily: fontFamily.secondaryBold, marginLeft:10}}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view4}>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>Payment Method</Text>
                            <TextInput
                            style={styles.input}
                            placeholderTextColor={colors.textLight}
                            placeholder="Telegraphic Transfer"
                            keyboardType="default"
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>Account Number</Text>
                            <TextInput
                            placeholderTextColor={colors.textLight}
                            style={styles.input}
                            placeholder="9156123599928"
                            keyboardType="number-pad"
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>Account Name</Text>
                            <TextInput
                            placeholderTextColor={colors.textLight}
                            style={styles.input}
                            placeholder="John Smith"
                            keyboardType="default"
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>Bank Name</Text>
                            <TextInput
                            placeholderTextColor={colors.textLight}
                            style={styles.input}
                            placeholder="Bank XYZ"
                            keyboardType="default"
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>Bank Branch Address</Text>
                            <TextInput
                            placeholderTextColor={colors.textLight}
                            style={styles.input}
                            placeholder="Bank XYZ, Street Name, City"
                            keyboardType="default"
                            />
                        </View>
                        <View style={styles.field}>
                            <Text style={{fontSize:fontSize.h3, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, marginBottom:10, fontWeight:"bold"}}>SWIFT Code</Text>
                            <TextInput
                            placeholderTextColor={colors.textLight}
                            style={styles.input}
                            placeholder="ABCD000012345"
                            keyboardType="default"
                            />
                        </View>
                        <View style={styles.checkbox}>
                            <CheckBox
                            disabled= {false}
                            value={checkBoxToggle}
                            onValueChange={(newValue)=>setCheckBoxToggle(newValue)}
                            />
                            <Text style={{fontSize:fontSize.h2, fontFamily:fontFamily.primaryRegular, color:colors.textPrimary, maxWidth:275, marginLeft:18}}>I hereby declare that the information provided above is correct. WorldRef shall not be held accountable for any loss of the payment due to discrepancy or mistake in the above information or due to any bank related issue at my end. By checking the "I Agree" option I authorise WorldRef to generate an invoice on my behalf.</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                            <Text style={{textAlign:"center", fontFamily:fontFamily.primaryRegular, color:colors.primary, fontSize:18}}>View Claim Form</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} style={styles.submit}>
                            <Text style={{textAlign:"center", fontFamily:fontFamily.primaryRegular, color:colors.secondary, fontSize:18}}>Submit Form</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ClaimForm

const styles = StyleSheet.create({
    screen:{
        backgroundColor: colors.secondary,
        flex:1,
        width:"100%"
    },
    header:{
        backgroundColor:colors.secondary,
        padding:20,
        elevation: 8
    },
    view1:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20
    },
    view2:{
        padding:20,
        alignItems:"center"
    },
    container:{
        padding:15,
        borderColor:colors.borderColor,
        borderWidth:1,
        borderRadius:4,
        backgroundColor:colors.secondary,
        width:"100%",
    },
    text:{
        flexDirection:"row",
        alignItems:"center"
    },
    view3:{
        paddingHorizontal:20,
        marginTop:15,
        width:"100%"
    },
    edit:{
        borderRadius:40,
        borderColor:colors.primary,
        borderWidth:1,
        paddingHorizontal:17,
        paddingVertical:7,
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"flex-end"
    },
    view4:{
        paddingHorizontal:20,
        width:"100%"
    },
    field:{
        marginVertical:15
    },
    input:{
        paddingHorizontal:15,
        paddingVertical:6,
        fontSize:fontSize.h3,
        borderWidth:1,
        borderColor:colors.borderColor,
        borderRadius:3
    },
    checkbox:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginTop:35,
        marginBottom:45
    },
    button:{
        marginBottom:40,
        borderColor:colors.primary,
        borderWidth:1,
        borderRadius:3,
        paddingHorizontal:33,
        paddingVertical:9,
        backgroundColor:colors.secondary,
        alignSelf:"center",
        width:"65%"
    },
    submit:{
        marginBottom:20,
        borderRadius:3,
        paddingHorizontal:33,
        paddingVertical:9,
        backgroundColor:colors.primary,
        alignSelf:"center",
        width:"65%"
    }
})
