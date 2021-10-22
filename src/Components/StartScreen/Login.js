import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';

import { loginApi } from './api';
import { colors, fontFamily, fontSize, levels } from '../../commonStyle';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            invalidEmail : false,
            invalidPassword : false,
            error : ''
        }
        this.logging       = this.logging.bind(this)
        this._onChangeText = this._onChangeText.bind(this)
        this.callbackLogin = this.callbackLogin.bind(this)

        // api cancel tokens
        this.loginToken;
    }

    async logging(){
        //reset network failure state
        this.props.onNetworkFailure('reset');
        
        if(!this.state.email){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Email Required',
                    invalidEmail : true
                }
            })
        }
        else if(!/^\S+@\S+\.\S+$/i.test(this.state.email) || this.state.email.length > 255){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Invalid email',
                    invalidEmail : true
                }
            })
        }
        else if(!this.state.password){
            this.setState(prevState => {
                return{
                    ...prevState,
                    error:'Password Required',
                    invalidPassword : true
                }
            })
        }
        else{

            this.setState(prevState => {
                return{
                    ...prevState,
                    loading : true,
                    error:''
                }
            })

            //calling API
            loginApi(this.state.email,this.state.password,this.loginToken,this.callbackLogin)
        }
    }

    _onChangeText(val,type){
        this.setState(prevState => {
            return{
                ...prevState,
                [type]: val,
                error:'',
                invalidEmail : false,
                invalidPassword : false,  
            }
        })
    }

    callbackLogin(data){
        if(data !== -1){
            console.log(data)
        }
        else{
            this.props.onNetworkFailure();
            setTimeout(() => {
                //reset network
                this.props.onNetworkFailure('reset');
            }, 3000);
        }
    }

    render() {
        return (
            <View style={{width:'100%',marginTop:levels.l7}}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput 
                    keyboardType="email-address"
                    placeholder="Enter email address"
                    autoCapitalize="none"
                    onChangeText={(val) => this._onChangeText(val,'email')}
                    style={[{marginBottom:levels.l4},styles.inputs]}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter password"
                    onChangeText={(val) => this._onChangeText(val,'password')}
                    style={[{marginBottom:levels.l3},styles.inputs]}
                />
                <TouchableOpacity>
                    <Text style={styles.forgotTxt}>Forgot Password?</Text>
                </TouchableOpacity>
                <View>
                    {this.state.error ? 
                        <Text style={styles.error}>{this.state.error}</Text> 
                    : null}
                    <TouchableOpacity style={styles.primaryBtn} onPress={this.logging}>
                        <Text style={styles.btnTxt}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.createAcc}>
                        New to WorldRef?
                        <Text style={{color:colors.primary}}> Create an account</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label : {
        fontFamily : fontFamily.tertiarySemi,
        marginBottom:levels.l3
    },
    inputs : {
        borderWidth : 1,
        borderRadius : 8,
        borderColor : colors.textFaint,
        padding:levels.l3,
        fontFamily : fontFamily.tertiaryMd
    },
    forgotTxt : {
        color:colors.textLight,
        alignSelf:'flex-end',
        fontFamily:fontFamily.tertiaryMd,
        fontSize : fontSize.h4
    },
    error : {
        fontSize:fontSize.h4,
        color:colors.alert,
        alignSelf:'center',
        position:'absolute',
        bottom:56,
        fontFamily:fontFamily.tertiaryLt
    },
    primaryBtn: {
        backgroundColor:colors.primary,
        borderRadius : 5,
        borderColor : colors.primary,
        padding : levels.l3,
        paddingLeft:levels.l7,
        paddingRight:levels.l7,
        alignSelf:'center',
        marginTop : 48,
    },
    btnTxt : {
        color:colors.secondary,
        fontSize:fontSize.h1,
        fontFamily:fontFamily.primaryBold
    },
    createAcc : {
        color:colors.textLight,
        fontSize:fontSize.h5,
        alignSelf:'center',
        marginTop:levels.l4,
        fontFamily : fontFamily.tertiaryMd
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onNetworkFailure : (reset) => dispatch({type:'NETWORKFAILURE',reset:reset}),
    }
}

export default connect(null,mapDispatchToProps)(Login)
