import React,{Component} from 'react';
import { View, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { connect } from 'react-redux';

import {styles} from './navigationStyle';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <View style={styles.navigationBox}>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons 
                        name="home"
                        style={[
                            styles.icons,styles.navIcons,
                            this.props.routeName==='Home' ? styles.active : null
                        ]} 
                    />
                    <Text style={[styles.tabText,this.props.routeName==='Home' ? styles.active : null]}>Home</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons 
                        name="handshake"
                        style={[
                            styles.icons,styles.navIcons,
                            this.props.routeName==='Deals' ? styles.active : null
                        ]} 
                    />
                    <Text style={[styles.tabText,this.props.routeName==='Deals' ? styles.active : null]}>Deals</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons 
                        name="plus-box-outline"
                        style={[
                            styles.icons,styles.navIcons,
                            this.props.routeName==='New' ? styles.active : null
                        ]} 
                    />
                    <Text style={[styles.tabText,this.props.routeName==='New' ? styles.active : null]}>New</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons 
                        name="arrow-up-down"
                        style={[
                            styles.icons,styles.navIcons,
                            this.props.routeName==='Transactions' ? styles.active : null
                        ]} 
                    />
                    <Text style={[styles.tabText,this.props.routeName==='Transactions' ? styles.active : null]}>Transactions</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <MaterialCommunityIcons 
                        name="account-group"
                        style={[
                            styles.icons,styles.navIcons,
                            this.props.routeName==='Network' ? styles.active : null
                        ]} 
                    />
                    <Text style={[styles.tabText,this.props.routeName==='Network' ? styles.active : null]}>My Network</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    // notificationSeen            : state.notifications.notificationSeen,
    // notificationSeenApiCalled   : state.notifications.notificationSeenApiCalled,
});
  
export default connect(mapStateToProps)(Navigation);
