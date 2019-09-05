import React, { Component } from 'react'
import { View,Text } from 'native-base'

export default class PopupRequired extends Component {
    render() {
        return (
            <View>
                <Text  uppercase={false} note style={{color:'red',fontSize:'24px'}}>
                    Əgər siz bu vieoya baxmaq istəyirsinizsə aşağıdakıları yerinə yetirməlisiz.
                    </Text>
                <Text>
                    1.Kanala Abunə olun{"\n"}
                    2.Videonu Paylaşın{"\n"}
                    3.Facebook səhifəsini bəyənin{"\n"}
                </Text>
            </View>
        )
    }
}