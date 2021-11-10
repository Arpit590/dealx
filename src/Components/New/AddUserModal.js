import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { newStyle } from './newStyle';
import { levels } from '../../commonStyle';

export default class AddUserModal extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View style={{marginTop:levels.l6}}>
                <TouchableOpacity style={newStyle.add}> 
                    <Text style={newStyle.addTxt}>Add From Address Book</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={newStyle.add}> 
                    <Text style={newStyle.addTxt}>Add Manually</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}
