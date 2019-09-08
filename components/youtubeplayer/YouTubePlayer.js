import React, { Component } from 'react'
import { WebView } from 'react-native'
export default class YouTubePlayer extends Component {
    render() {
        return (
            <React.Fragment>
                <WebView
                    style={[{ width: '100%', maxHeight: 200, minHeight:200 }, this.props.style]}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: this.props.src }}
                />
            </React.Fragment>
        )
    }
}
