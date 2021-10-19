import React, { Component } from 'react'
import { Text, View, Animated, StyleSheet, TextInput } from 'react-native';

import { Index } from './Index'
import { fontFamily } from '../../commonStyle';
import Login from './Login';


export class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            translateAnim: new Animated.Value(0),
            loginSection : true
        }
    }

    render() {
        return (
            <Index screenName="register">
                <View style={styles.container}>
                    <Text style={styles.title}>Log In</Text>
                    <Login navigation={this.props.navigation}/>
                </View>
            </Index>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        marginTop:150,
        alignItems:'center'
    },
    title : {
        fontFamily : fontFamily.tertiaryMd,
        fontSize : 24,
    }
})

export default Register
