import React, { Component } from 'react';
import {  Animated, Dimensions } from 'react-native';
import {  Text,  View } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Gallery from '../../components/Gallery';
import { withNavigation } from 'react-navigation';
import { StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const w = width*0.90;
const h = 200;
const containerWidth = width*0.90;
const containerHeight = 240;
const imageContainerHeight = 200; 
const informationContainerHeight = 15;
class Category extends Component {
  scrollX = new Animated.Value(0);
  render() {
    const { item, navigation } = this.props;
    const destination = item;
    return (
                // <View style={{width:containerWidth, height:containerHeight,minHeight:containerHeight, alignSelf:"center"}}>
                //     <View style={{height:imageContainerHeight}}>
                //     <Gallery width={w} height={h} images={destination.placeMediafileList}  onPress={()=>{navigation.navigate('DestinationInfo', { destination: destination })}}/>
                //     </View>
                //     <View style={{top:0,alignContent:"center",flex:1, flexDirection:"row", height:informationContainerHeight}}>
                //         <View style={{alignItems:"center"}}>
                //           <Text uppercase style={{fontWeight:"500", fontSize:14}}>{destination.name}</Text>
                //         </View>
                //         <View style={{alignItems:"center", flex:1, flexDirection:"row",position:"absolute", right:5}}>
                //             <FontAwesome name="location-arrow" color={'#007BFA'} size={12} />
                //             <Text style={{ color: 'red', fontSize:13 }}> {destination.distance} miles away</Text>
                //         </View>
                //     </View>
                // </View>
              <TouchableOpacity activeOpacity={0.5} onPress={()=>{navigation.navigate('VideoList')}}>
                    <View style={styles.seminarContainer} >
                      <Text style={styles.seminarText}>{destination.name}</Text>
                    </View> 
              </TouchableOpacity>
    );
  }
}

export default withNavigation(Category)


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