import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors } from "../../commonStyle"
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