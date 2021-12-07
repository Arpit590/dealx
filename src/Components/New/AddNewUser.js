import React, { Component } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { newStyle } from './newStyle';
import { colors, levels } from '../../commonStyle';
import { ActionBtn } from './Selling/NewDeal';

export default class AddNewUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputItems : [
                'Name',
                'Address',
                'Email ID',
                'Phone Number',
                'Company Name',
                'Department',
                'Designation',
                'Company Profile',
                'Company Website'
            ]
        }
    }
    render() {
        return(
            <ScrollView style={{padding:levels.l5}}>
                <SafeAreaView>
                    {this.state.inputItems.map((item,index) => {
                        return(
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                {index===1 ? 
                                    <>
                                        <TextInput style={[newStyle.input,{marginBottom:levels.l2}]} placeholder="Address Line 1"/>
                                        <TextInput style={[newStyle.input,{marginBottom:levels.l2}]} placeholder="Address Line 2"/>
                                        <TextInput style={newStyle.input} placeholder="Address Line 3"/>
                                    </>
                                :
                                    index === 7 ? 
                                        <TouchableOpacity style={newStyle.add}> 
                                            <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
                                            <Text style={newStyle.addTxt}>Add Company Profile</Text> 
                                        </TouchableOpacity>
                                    :
                                        <TextInput style={newStyle.input} />
                                }
                            </View>
                        )
                    })}
                    <ActionBtn/>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
