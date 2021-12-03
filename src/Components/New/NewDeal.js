import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ModalComp } from '../Atoms/Modal';
import { ModalView } from './ModalView';
import AddUserModal from './AddUserModal';

import { colors, fontFamily, fontSize, levels } from '../../commonStyle';
import { newStyle } from './newStyle';

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

const SearchBuyer = props => (
    <>
        <View style={{paddingLeft:levels.l5,justifyContent:'center',borderColor:colors.textFaint,borderWidth:1,marginBottom:levels.l3}}>
            <TextInput style={[newStyle.input,{borderColor:colors.secondary}]} placeholder="Search buyer" />
            <MaterialCommunityIcons name="magnify" size={22} color={colors.textLight} style={{position:'absolute',left:levels.l2}} />
        </View>
        <TouchableOpacity 
            onPress={props.convertToAddNewUserModal}
            style={newStyle.add}
        > 
            <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
            <Text style={newStyle.addTxt}>Add New Buyer</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={[newStyle.primaryBtn,{marginTop:'auto',alignSelf:'center'}]}>
            <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>Add Buyer</Text>
        </TouchableOpacity>
    </>
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
                'Payment Terms',
                'Deal Closure Date',
            ],
            modalVisible : false,
            addNewUserModalVisible : false,
        }
        this.convertToAddNewUserModal = this.convertToAddNewUserModal.bind(this);
    }

    convertToAddNewUserModal(){
        this.setState(prevState => {
            return{
                ...prevState,
                addNewUserModalVisible : !prevState.addNewUserModalVisible
            }
        })
    }

    render() {
        return (
            <ScrollView style={{padding:levels.l5,backgroundColor:colors.secondary}}>
                <SafeAreaView>
                    <TouchableOpacity style={newStyle.add} onPress={() => this.setState(prevState => {
                        return{
                            ...prevState,
                            modalVisible : !prevState.modalVisible,
                        }
                    })}> 
                        <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
                        <Text style={newStyle.addTxt}>Add Buyer</Text> 
                    </TouchableOpacity>
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
                    <ModalComp modalVisible={this.state.modalVisible}>
                        <ModalView topTxt={!this.state.addNewUserModalVisible ? "Search Buyer" : "Add New Buyer"} 
                            close={() => this.setState(prevState => {
                                return{
                                    ...prevState,
                                    modalVisible : prevState.addNewUserModalVisible ? prevState.modalVisible : !prevState.modalVisible,
                                    addNewUserModalVisible : prevState.addNewUserModalVisible ? !prevState.addNewUserModalVisible : prevState.addNewUserModalVisible
                                }
                            })}
                        >
                            {!this.state.addNewUserModalVisible ? 
                                <SearchBuyer 
                                    convertToAddNewUserModal={this.convertToAddNewUserModal}
                                />
                            :
                                <AddUserModal 
                                    navigation={this.props.navigation}
                                    close={() => this.setState(prevState => {
                                        return{
                                            ...prevState,
                                            modalVisible : !prevState.modalVisible
                                        }
                                    })}
                                />
                            }
                        </ModalView>
                    </ModalComp>
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
