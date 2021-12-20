import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import AddUserModal from '../AddUserModal';
import { AddBtn, PrimaryBtn } from '../../Atoms/CompUtils';
import DatePicker from '../../Atoms/DatePicker';

import { colors, fontFamily, fontSize, levels } from '../../../commonStyle';
import { newStyle } from '../newStyle';

import ArrowDown from '../../../../assets/icons/icons8-arrow-down.svg'

export const ActionBtn = props => {
    return(
        <View style={{flexDirection:'row',alignItems:'center',marginTop:levels.l7,paddingBottom:levels.l7}}>
            <TouchableOpacity style={{width:'50%',alignItems:'center'}}>
                <Text style={{color:colors.primary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Cancel</Text>
            </TouchableOpacity>
            <PrimaryBtn text={props.action} />
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
            buyers : {},
            showDatePicker : true
        }

        this.addBuyers        = this.addBuyers.bind(this);
    }

    addBuyers(buyers){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                buyers : {
                    ...prevState.buyers,
                    ...buyers,
                }
            }
        })
    }

    render() {
        return (
            <ScrollView style={{padding:levels.l5}}>
                <SafeAreaView>
                    {Object.keys(this.state.buyers).length > 0 ?        
                        Object.keys(this.state.buyers).map((item,index) => {
                            return(
                                <View 
                                style={{padding:levels.l3,backgroundColor:colors.secondary,flexDirection:'row'}}
                                key={item}>
                                    <Text style={[newStyle.text,{marginRight:levels.l6}]}>Buyer</Text>
                                    <View>
                                        <Text style={[newStyle.text,{fontSize:fontSize.h1}]}>{this.state.buyers[item]['buyername']}</Text>
                                        <Text style={{fontFamily:fontFamily.primary,fontSize:fontSize.h3}}>{this.state.buyers[item]['addressline1']+' '+this.state.buyers[item]['addressline2']+' '+ this.state.buyers[item]['city']+' '+this.state.buyers[item]['country']}</Text>
                                    </View>
                                </View>
                            )
                        })
                    :
                        <AddBtn text="Add Buyer" action={() => this.setState(prevState => {
                            return{
                                ...prevState,
                                modalVisible : !prevState.modalVisible,
                            }
                        })} />
                    }
                    {this.state.inputItems.map((item,index) => {
                        return (
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={newStyle.text}>{item}</Text>
                                <View style={{justifyContent:'center'}}>
                                    <TextInput style={newStyle.input} />
                                    {item==='Deal Closing Date' || item==='Deal Closure Date' ?  
                                        <TouchableOpacity
                                        onPress={() => this.setState(prevState => {
                                            return{
                                                ...prevState,
                                                showDatePicker : !prevState.showDatePicker
                                            }
                                        })} 
                                        style={styles.datePicker}>
                                            <DatePicker closePicker={() => this.setState(prevState => {
                                            return{
                                                ...prevState,
                                                showDatePicker : !prevState.showDatePicker
                                            }
                                        })}/> 
                                        </TouchableOpacity>
                                    : null }
                                    {item==='RFQ Type' || item==='Delivery Terms' || item==='Payment Terms' ?  
                                        <TouchableOpacity style={{position:'absolute',right:levels.l4}}>
                                            <ArrowDown/>
                                        </TouchableOpacity>
                                    : null }
                                </View>
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
                    <ActionBtn action="Submit Deal" />
                    <AddUserModal 
                    navigation={this.props.navigation} 
                    modalVisible={this.state.modalVisible} type="Buyer" 
                    actionAfterSearchAndSelect={(buyers) => this.addBuyers(buyers)}
                    />
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
        marginRight:levels.l2,
        backgroundColor:colors.secondary
    },
    datePicker : {
        position:'absolute',
        right:levels.l4,
        left:0,
        alignItems:'flex-end'
    }
})
