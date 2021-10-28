import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Index from '../Index'
import Navigation from '../Navigation/Navigation'

export default class New extends Component {
    render() {
        return (
            <Index>
                <Navigation routeName={this.props.route.name} />
            </Index>
        )
    }
}
