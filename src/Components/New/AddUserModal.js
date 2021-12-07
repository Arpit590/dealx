import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ModalComp } from '../Atoms/Modal';
import { ModalView } from './ModalView';
import { SelectBox } from '../Atoms/CompUtils';

import { newStyle } from './newStyle';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

const SearchBuyer = props => (
    <>
        <View style={{paddingLeft:levels.l5,justifyContent:'center',borderColor:colors.textFaint,borderWidth:1,marginBottom:levels.l3}}>
            <TextInput style={[newStyle.input,{borderColor:colors.secondary}]} placeholder={`Search ${props.type}`} />
            <MaterialCommunityIcons name="magnify" size={22} color={colors.textLight} style={{position:'absolute',left:levels.l2}} />
        </View>
        <View>
            <View style={[newStyle.input,{flexDirection:'row',justifyContent:'space-between'}]}>
                <Text>Requirements</Text>
                <SelectBox 
                acceptedTerms={true}/>
            </View>
        </View>
        {/* for new quotation screen */}
        {!props.newQuotation ?
        <TouchableOpacity 
            onPress={props.convertToAddNewUserModal}
            style={newStyle.add}
        > 
            <MaterialCommunityIcons name="plus" color={colors.primary} size={24} />
            <Text style={newStyle.addTxt}>Add New {props.type}</Text> 
        </TouchableOpacity>
        : null }
        <TouchableOpacity style={[newStyle.primaryBtn,{marginTop:'auto',alignSelf:'center'}]}>
            <Text style={{color:colors.secondary,fontFamily:fontFamily.primaryBold,fontSize:fontSize.h1}}>{props.newQuotation ? 'Submit Quotaion' : 'Add ' + props.type}</Text>
        </TouchableOpacity>
    </>
)

const UserAddOptions = props => {
    const addManually = () => {
        props.close();
        props.navigation.navigate('Add New User') 
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


export default class AddUserModal extends Component {
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
                <ModalView topTxt={this.props.newQuotation ? 'Choose Deal' : !this.state.addNewUserModalVisible && !this.props.noSearch ? `Search ${this.props.type}` : `Add New ${this.props.type}`} 
                    close={() => this.setState(prevState => {
                        return{
                            ...prevState,
                            modalVisible : prevState.addNewUserModalVisible ? prevState.modalVisible : !prevState.modalVisible,
                            addNewUserModalVisible : prevState.addNewUserModalVisible ? !prevState.addNewUserModalVisible : prevState.addNewUserModalVisible
                        }
                    })}
                >
                    {this.props.newQuotation || (!this.state.addNewUserModalVisible && !this.props.noSearch) ? 
                        <SearchBuyer 
                            convertToAddNewUserModal={this.convertToAddNewUserModal}
                            type={this.props.type}
                            newQuotation={this.props.newQuotation}
                        />
                    :
                        <UserAddOptions 
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
