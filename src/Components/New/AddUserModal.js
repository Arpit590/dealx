import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { newStyle } from './newStyle';
import { levels } from '../../commonStyle';

export default class AddUserModal extends Component {
    constructor(props){
        super(props);
        this.addNewBuyer = this.addNewBuyer.bind(this)
    }

    addNewBuyer(){
        this.props.close();
        this.props.navigation.navigate('Add New Buyer')
    }
    render() {
        return (
            <View style={{marginTop:levels.l6}}>
                <TouchableOpacity style={newStyle.add}> 
                    <Text style={newStyle.addTxt}>Add From Address Book</Text> 
                </TouchableOpacity>
                <TouchableOpacity style={newStyle.add} onPress={this.addNewBuyer}> 
                    <Text style={newStyle.addTxt}>Add Manually</Text> 
                </TouchableOpacity>
            </View>
        )
    }
}
