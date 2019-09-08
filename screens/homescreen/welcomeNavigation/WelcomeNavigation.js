import React, { Component } from 'react'
import ThumbnailText from '../../../components/ThumbnailText';
import { View } from 'native-base';
import ViewRow from '../../../components/grid/ViewRow';
import {Dimensions,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Video from "react-native-video"
import UIButton from '../../../components/ui/UIButton';
import { withNavigation } from 'react-navigation';
import images from '../../../assets/icons/base64images';
let win = Dimensions.get("window");
const width = win.width;
const height = win.height;
const containerWidth = width*0.82;

class WelcomeNavigation extends Component {
    render() {
        const {navigation}  = this.props;
        return (
            <View style={{}}>
                <View style={{justifyContent:"center",height:60,maxHeight:100,backgroundColor:"#0988b3"}}>
                <Text style={{textAlign:"center",width:containerWidth,alignSelf:"center",color:"white"}}>An element of truth - videos about science, education, and anything else I find interesting.</Text>      
                </View>
                <View style={{justifyContent:"center",alignItems:"center",paddingVertical:10,alignSelf:"center",width:containerWidth,color:"white"}}>
                <Ionicons name="logo-youtube" size={32} color="red" />
                  <Text style={{}}>LIVE STREAM</Text>
                  <Text style={{textAlign:"center",fontSize:20}}>We are going to speak about evolution tomorrow in a live broadcast </Text>
                </View>
               
                <View style={{justifyContent:"center",height:60,maxHeight:100,backgroundColor:"#0988b3"}}>
                     <Text style={{textAlign:"center",width:containerWidth,alignSelf:"center",color:"white"}}>An element of truth - videos about science, education, and anything else I find interesting.</Text>      
                  </View>
                 

              
                <UIButton onPress={() => {
                        navigation.navigate('DestinationList')
                    }}
                    text="EXPLORE" style={{marginTop:40, marginBottom:20}}></UIButton>
                <TouchableOpacity  onPress={() => {
                        navigation.navigate('Settings')
                    }}>
                    <Text style={{textAlign:"center"}}>Contact us</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });


export default withNavigation(WelcomeNavigation)
