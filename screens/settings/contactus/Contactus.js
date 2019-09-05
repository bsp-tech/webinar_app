import React, { Component } from 'react'
import { View, Text, Container, Content, } from 'native-base';
import { StyleSheet, Dimensions} from 'react-native'
import { withNavigation } from 'react-navigation';

const window = Dimensions.get("window");
const width = window.width;
const height = window.height;
const contentWidth = window.width*0.80;
const footerHeight = 100;

class Contactus extends Component {
     
  state = {
    phone: "Phone:+9940504281188",
    email:"kamil-asgarov@gmail.com",
    fax:"sadsa",
    time:""

  }
  
    render() {
        return (
            <Container>
                <Content>
                    <View style={{width:contentWidth,borderWidth: 2, borderColor: '#d6d7da',alignSelf:"center",padding: 10, alignItems:"flex-start", marginTop:30}}>
                       <Text >
                         Phone: {this.state.phone}
                       </Text>
                       <Text>
                       Email: {this.state.email}
                       </Text>
                       <Text>
                       Fax: {this.state.fax}
                       </Text>
                       <Text>
                       Time: {this.state.time}
                       </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}


export default withNavigation(Contactus);

const styles = StyleSheet.create({
  sectionInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    height: 40
  },
    welcomeCol: {
      paddingTop: 10
    },
    flex: {
      flex: 0
    },
    column: {
      flexDirection: "column"
    },
    row: {
      flexDirection: "row"
    },
    header: {
      // backgroundColor: 'transparent',
      paddingHorizontal: 36,
      paddingTop: 36,
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
    },
    back: {
      width: 16 * 3,
      height: 16 * 3,
      justifyContent: "center",
      alignItems: "flex-start"
    },
    contentHeader: {
      backgroundColor: "transparent",
      padding: 36,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginTop: -36 / 2
    },
    avatar: {
      position: "absolute",
      top: -36,
      right: 36,
      width: 36 * 2,
      height: 36 * 2,
      borderRadius: 36
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6
      },
      shadowOpacity: 0.5,
      shadowRadius: 5
    },
    dotsContainer: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 36,
      right: 0,
      left: 0
    },
    dots: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 6,
      backgroundColor: '#DCE0E9'
    },
    title: {
      fontSize: 14 * 2,
      fontWeight: "bold"
    },
    description: {
      fontSize: 14 * 1.2,
      lineHeight: 14 * 2,
      color: '#BCCCD4'
    }
  });
  