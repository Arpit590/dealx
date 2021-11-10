import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import { ModalComp } from '../Atoms/Modal';
import { ModalView } from './ModalView';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

const SearchBuyer = props => (
    <ModalComp modalVisible={props.modalVisible}>
        <ModalView topTxt="Search Buyer" close={props.close}>
            <View style={{paddingLeft:levels.l5,justifyContent:'center',borderColor:colors.textFaint,borderWidth:1,marginBottom:levels.l3}}>
                <TextInput style={[styles.input,{borderColor:colors.secondary}]} placeholder="Search buyer" />
                <MaterialCommunityIcons name="magnify" size={22} color={colors.textLight} style={{position:'absolute',left:levels.l2}} />
            </View>
            <TouchableOpacity style={styles.add}> 
                <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
                <Text style={styles.addTxt}>Add New Buyer</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={[styles.primaryBtn,{marginTop:'auto',alignSelf:'center'}]}>
                <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Add Buyer</Text>
            </TouchableOpacity>
        </ModalView>
    </ModalComp>
)

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
                'Deal Closure Date',
            ],
            search : false
        }
    }

    render() {
        return (
            <ScrollView style={{padding:levels.l5,backgroundColor:colors.secondary}}>
                <SafeAreaView>
                    <TouchableOpacity style={styles.add} onPress={() => this.setState(prevState => {
                        return{
                            ...prevState,
                            search : !prevState.search
                        }
                    })}> 
                        <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
                        <Text style={styles.addTxt}>Add Buyer</Text> 
                    </TouchableOpacity>
                    {this.state.inputItems.map((item,index) => {
                        return (
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}} key={item}>
                                <Text style={styles.text}>{item}</Text>
                                <TextInput style={styles.input} />
                            </View>
                        )
                    })}
                    <Text style={[styles.text,{marginTop:levels.l2}]}>Your Role in this Deal</Text>
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
                        <Text style={styles.text}>Line Items</Text>
                        <TouchableOpacity style={styles.add}> 
                            <Text style={styles.addTxt}>Add Line Items</Text> 
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.text}>Attachments</Text>
                        <TouchableOpacity style={styles.add}> 
                            <Text style={styles.addTxt}>Add Attachments</Text> 
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={{width:'50%',alignItems:'center'}}>
                            <Text style={{color:colors.primary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.primaryBtn}>
                            <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Submit Deal</Text>
                        </TouchableOpacity>
                    </View>
                    <SearchBuyer 
                        close={() => this.setState(prevState => {
                            return{
                                ...prevState,
                                search : !prevState.search
                            }
                        })} 
                        modalVisible={this.state.search}
                    />
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    add : {
        borderColor:colors.primary,
        padding:levels.l4,
        flexDirection:'row',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:levels.l6
    },
    addTxt : {
        color:colors.primary,
        fontSize:fontSize.h1,
        paddingLeft:levels.l2,
        fontFamily:fontFamily.primaryBold
    },
    text : {
        fontFamily : fontFamily.primaryBold,
        fontSize:fontSize.h4,
        marginBottom:levels.l2
    },
    input : {
        borderColor : colors.textFaint,
        borderWidth:1,
        padding:levels.l3,
    },
    role : {
        height:16,
        width:16,
        borderRadius:8,
        borderColor:colors.textLight,
        borderWidth:1,
        marginRight:levels.l2
    },
    primaryBtn : {
        padding:levels.l4,
        width:'50%',
        alignItems:'center',
        backgroundColor:colors.primary
    }
})
