import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AddUser from '../AddUser';
import { AddBtn } from '../../Atoms/AddBtn';

import { colors, fontFamily, fontSize, levels } from '../../../commonStyle';
import { newStyle } from '../newStyle';

export const ActionBtn = props => {
    return(
        <View style={{flexDirection:'row',alignItems:'center',marginTop:levels.l7,paddingBottom:levels.l7}}>
            <TouchableOpacity style={{width:'50%',alignItems:'center'}}>
                <Text style={{color:colors.primary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={newStyle.primaryBtn}>
                <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Submit Deal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default class NewDeal extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputItems : [
                'Deal Name',
                'Deal Description',
                'Deal Closing Date',
                'RFQ Type',
                'Delivery Terms',
                'Payment Terms',
                'Deal Closure Date',
            ],
            modalVisible : false,
        }
    }

    render() {
        return (
            <ScrollView style={{padding:levels.l5,backgroundColor:colors.secondary}}>
                <SafeAreaView>
                    <AddBtn text="Add Buyer" action={() => this.setState(prevState => {
                        return{
                            ...prevState,
                            modalVisible : !prevState.modalVisible,
                        }
                    })} />
                    {this.state.inputItems.map((item,index) => {
                        return (
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                <TextInput style={newStyle.input} />
                            </View>
                        )
                    })}
                    <Text style={[newStyle.text,{marginTop:levels.l2}]}>Your Role in this Deal</Text>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flexDirection:'row',marginRight:levels.l7}}>
                            <View style={styles.role}></View>
                            <Text style={{fontFamily:fontFamily.primaryRegular}}>Active</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.role}></View>
                            <Text style={{fontFamily:fontFamily.primaryRegular}}>Passive</Text>
                        </View>
                    </View>
                    <View style={{marginTop:levels.l7}}>
                        <TouchableOpacity style={newStyle.add} onPress={() => this.props.navigation.navigate('Line Items')}> 
                            <Text style={newStyle.addTxt}>Add Line Items</Text> 
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={newStyle.add}> 
                            <Text style={newStyle.addTxt}>Add Attachments</Text> 
                        </TouchableOpacity>
                    </View>
                    <ActionBtn />
                    <AddUser navigation={this.props.navigation} modalVisible={this.state.modalVisible} />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    text : {
        fontFamily : fontFamily.primaryBold,
        fontSize:fontSize.h4,
        marginBottom:levels.l2
    },
    role : {
        height:16,
        width:16,
        borderRadius:8,
        borderColor:colors.textLight,
        borderWidth:1,
        marginRight:levels.l2
    }
})
