import React, { Component } from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export class Index extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <SafeAreaView style={{backgroundColor:'#FFF4F5',flex:0}}/>
                <SafeAreaView style={{flex:1,backgroundColor:'#F0F6FF'}}>
                    <LinearGradient colors={['#FFF4F5', '#F8F5F9', '#F0F6FF']} style={styles.linearGradient}>
                        {this.props.children}
                    </LinearGradient>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        flex         : 1,
        paddingLeft  : 16,
        paddingRight : 16,
    },
})
