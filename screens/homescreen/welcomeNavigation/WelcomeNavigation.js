import { Ionicons } from '@expo/vector-icons';
import { View } from 'native-base';
import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import UIButton from '../../../components/ui/UIButton';
import YouTubePlayer from '../../../components/youtubeplayer/YouTubePlayer';
let win = Dimensions.get("window");
const width = win.width;
const height = win.height;
const containerWidth = width*0.82;

class WelcomeNavigation extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null
  }

  render() {
        const {navigation}  = this.props;
        return (
            <View style={{}}>
             
                <View style={{justifyContent:"center",height:60,maxHeight:100,backgroundColor:"#0988b3", marginTop:10, marginBottom:10}}>
                  <Text style={{textAlign:"center",width:containerWidth,alignSelf:"center",color:"white"}}>An element of truth - videos about science, education, and anything else I find interesting.</Text>      
                </View>

                <YouTubePlayer src="https://www.youtube.com/embed/-ZZPOXn6_9w" />
                <View style={{justifyContent:"center",height:60,maxHeight:100,backgroundColor:"#0988b3"}}>
                     <Text style={{textAlign:"center",width:containerWidth,alignSelf:"center",color:"white"}}>An element of truth - videos about science, education, and anything else I find interesting.</Text>      
                </View>

                
                <View style={{justifyContent:"center",alignItems:"center",paddingVertical:10,alignSelf:"center",width:containerWidth,color:"white"}}>
                  <Ionicons name="logo-youtube" size={32} color="red" />
                  <Text style={{}}>LIVE STREAM</Text>
                </View>
                <View>
                  <YouTubePlayer src="https://www.youtube.com/embed/-ZZPOXn6_9w"/>
                  <Text style={{textAlign:"center",fontSize:20}}>We are going to speak about evolution tomorrow in a live broadcast </Text>
                </View>
               
                

                
                 
                  
              
                <UIButton onPress={() => {
                        navigation.navigate('CategoryList')
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
