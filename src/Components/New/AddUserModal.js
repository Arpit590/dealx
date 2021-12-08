import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

import { ModalComp } from '../Atoms/Modal';
import { ModalView } from './ModalView';
import NetworkFailurePopup from '../Atoms/networkFailurePopup';
import Search from './Search';

import { newStyle } from './newStyle';
import { levels } from '../../commonStyle';


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


class AddUserModal extends Component {
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
                        <Search
                            convertToAddNewUserModal={this.convertToAddNewUserModal}
                            type={this.props.type}
                            newQuotation={this.props.newQuotation}
                            actionAfterSearchAndSelect={this.props.actionAfterSearchAndSelect}
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
                {this.props.networkFailure ?
                    <NetworkFailurePopup />
                : null}
                </ModalView>
            </ModalComp>
        )
    }
}

const mapStateToProps = state => {
    return {
        networkFailure : state.networkFailure.networkFailureState
    }
}

export default connect(mapStateToProps)(AddUserModal)