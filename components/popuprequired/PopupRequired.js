import React, { Component } from 'react'
import { View, Text } from 'native-base'
import StyleSheet from "react-native";

export default class PopupRequired extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                <Text uppercase={false} note style={{fontSize: '24px' }}>
                    Əgər siz bu vieoya baxmaq istəyirsinizsə aşağıdakıları yerinə yetirməlisiz.
                </Text>
                <Text style={{marginTop: 10 }}>
                   
                    1.Kanala Abunə olun{"\n"}
                    2.Videonu Paylaşın{"\n"}
                    3.Facebook səhifəsini bəyənin{"\n"}
                </Text>
            </View>
        )
    }
}