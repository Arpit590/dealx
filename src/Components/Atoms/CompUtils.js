import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import { colors, fontFamily, fontSize, levels } from "../../commonStyle"
import { newStyle } from "../New/newStyle"

export const AddBtn = props => (
    <TouchableOpacity 
        style={newStyle.add} 
        onPress={props.action}
    > 
        <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
        <Text style={newStyle.addTxt}>{props.text}</Text> 
    </TouchableOpacity>
)

export const PrimaryBtn = props => (
    <TouchableOpacity style={[newStyle.primaryBtn,{alignSelf:'center'}]}>
        <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>{props.text}</Text>
    </TouchableOpacity>
)

export const SelectBox = props => (
    <TouchableOpacity 
    onPress={props.onPress}
    style={[
        {height:16,
        width:16,
        borderWidth:1,
        marginRight:levels.l3,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:2},
        props.acceptedTerms ? {backgroundColor:colors.success,borderColor:colors.success} : {backgroundColor:colors.secondary,borderColor:colors.textLight}
    ]}
    >
        <Feather name="check" color='#ffffff' />
    </TouchableOpacity>
)