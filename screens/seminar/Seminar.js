import React, { Component } from 'react'
import {  Text,  View } from 'native-base';
import {  Animated, Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
const w = width*0.90;
const h = 200;
const containerWidth = width*0.90;
const containerHeight = 240;
const styles = StyleSheet.create({
    seminarContainer: {
      borderRadius: 20,
      borderWidth: 0.5,
      width:containerWidth,
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"center",
      height:100,
      maxHeight:150,
      marginTop:20,
      backgroundColor:"#0988b3"
    },
    seminarText: {
      fontSize: 19,
      fontWeight: 'bold',
      color:"white"
    },
    
  });

export default class Seminar extends Component {
    render() {
        return (
          <View style={styles.seminarContainer}>
              <Text style={styles.seminarText}>REACT JS</Text>
          </View> 
        )
    }
}
