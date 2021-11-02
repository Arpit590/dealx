import React, { Component } from 'react'
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';


const SearchBuyer = props => (
    <Modal transparent={true} visible={props.modalVisible} animationType="fade">
        <TouchableOpacity 
                onPressOut={props.close}
                activeOpacity={1}
                style={{flex:1,position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,bottom:0,left:0,right:0}}
        >
            <View style={{flex:.7,backgroundColor:colors.secondary,margin:levels.l5,marginTop:64,padding:levels.l5,borderRadius:levels.l1}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:levels.l4}}>
                    <Text style={{fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Search Buyer</Text>
                    <AntDesign name="close" color={colors.textLight} onPress={props.close} size={24} />
                </View>
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
            </View>
        </TouchableOpacity>
    </Modal>
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
                            <View style={{marginTop:levels.l2,marginBottom:levels.l2}}>
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
