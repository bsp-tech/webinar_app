import React, { Component } from 'react'
import { View } from 'native-base';

export default class ViewCol extends Component {
    render() {
        const {style} = this.props;
        return (
            <View style={[style, {flex:1, flexDirection:"column", justifyContent:"space-between"}]}>
                {this.props.children}
            </View>
        )
    }
}
