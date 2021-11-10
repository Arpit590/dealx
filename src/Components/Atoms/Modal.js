import React from 'react'
import { Modal, TouchableOpacity } from 'react-native';


export const ModalComp = props => (
    <Modal transparent={true} visible={props.modalVisible} animationType="fade">
        <TouchableOpacity 
            activeOpacity={1}
            style={{flex:1,position:'absolute',backgroundColor:'rgba(0,0,0,0.4)',top:0,bottom:0,left:0,right:0}}
        >
            {props.children}
        </TouchableOpacity>
    </Modal>
)