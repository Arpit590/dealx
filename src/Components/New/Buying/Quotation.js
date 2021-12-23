import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

import SearchModal from '../SearchModal';
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

export default class Quotation extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputItems : [
                'Quotation/Offer No.',
                'Payment Terms',
                'Delivery Terms',
                'Offer Value',
                'Offer Validity',
                'Warranty',
                'Images',
                'Attachments'
            ],
            modalVisible : false,
            sellers : {},
            showDatePicker : true,
            dealId : Object.keys(this.props.route.params.deal)
        }

        this.addBuyers        = this.addBuyers.bind(this);
    }

    addBuyers(sellers){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
                sellers : {
                    ...prevState.sellers,
                    ...sellers,
                }
            }
        })
    }

    render() {
        return (
            <ScrollView style={{padding:levels.l5}}>
                <SafeAreaView>
                    <Text style={{marginBottom:levels.l3}}>
                        <Text style={styles.text}>Date: </Text>
                        {this.props.route.params.deal[this.state.dealId]['createddate']}
                    </Text>
                    {Object.keys(this.state.sellers).length > 0 ?        
                        Object.keys(this.state.sellers).map((item,index) => {
                            return(
                                <View 
                                style={{padding:levels.l3,backgroundColor:colors.secondary,flexDirection:'row'}}
                                key={item}>
                                    <Text style={[newStyle.text,{marginRight:levels.l6}]}>Seller</Text>
                                    <View>
                                        <Text style={[newStyle.text,{fontSize:fontSize.h1}]}>{this.state.sellers[item]['sellername']}</Text>
                                        <Text style={{fontFamily:fontFamily.primary,fontSize:fontSize.h3}}>{this.state.sellers[item]['addressline1']+' '+this.state.sellers[item]['addressline2']+' '+ this.state.sellers[item]['city']+' '+this.state.sellers[item]['country']}</Text>
                                    </View>
                                </View>
                            )
                        })
                    :
                        <AddBtn text="Add Seller" action={() => this.setState(prevState => {
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
                                    {item==='Offer Validity'?  
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
                    <View style={{marginTop:levels.l7}}>
                        <TouchableOpacity style={newStyle.add} onPress={() => this.props.navigation.navigate('Line Items')}> 
                            <Text style={newStyle.addTxt}>Add Attachment</Text> 
                        </TouchableOpacity>
                    </View>
                    <ActionBtn action="Submit Quote" />
                    <SearchModal 
                    navigation={this.props.navigation} 
                    modalVisible={this.state.modalVisible} type="Seller" 
                    actionAfterSearchAndSelect={(sellers) => this.addBuyers(sellers)}
                    />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const Text = styled.Text`
    font-family : ${fontFamily.primary}
`;

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
