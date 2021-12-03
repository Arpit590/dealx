import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ModalComp } from '../Atoms/Modal';
import { ModalView } from './ModalView';

import { newStyle } from './newStyle';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

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

const AddUserModal = props => {
    const addManually = () => {
        props.close();
        props.navigation.navigate('Add New Buyer') 
    }

    return (
        <View style={{marginTop:levels.l6}}>
            <TouchableOpacity style={newStyle.add}> 
                <Text style={newStyle.addTxt}>Add From Address Book</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={newStyle.add} onPress={addManually}> 
                <Text style={newStyle.addTxt}>Add Manually</Text> 
            </TouchableOpacity>
        </View>
    )
}


export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible : false,
            addNewUserModalVisible : false,
        }
        this.convertToAddNewUserModal = this.convertToAddNewUserModal.bind(this);
        this.toggleModal              = this.toggleModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        //toggle modal on add buyer btn call
        this.props.modalVisible !== prevProps.modalVisible ? this.toggleModal() : null
    }
    

    toggleModal(){
        this.setState(prevState => {
            return{
                ...prevState,
                modalVisible : !prevState.modalVisible,
            }
        })
    }

    convertToAddNewUserModal(){
        this.setState(prevState => {
            return{
                ...prevState,
                addNewUserModalVisible : !prevState.addNewUserModalVisible
            }
        })
    }

    render(){
        return(
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
        )
    }
}
