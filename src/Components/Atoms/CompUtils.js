import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors, fontFamily, fontSize } from "../../commonStyle"
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