import React, { Component } from 'react'
import { View, Text, Container, Content, } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation';
import MapPicker from '../../../components/mappicker/MapPicker';
import { Ionicons } from '@expo/vector-icons';

const window = Dimensions.get("window");
const width = window.width;
const height = window.height;
const contentWidth = window.width * 0.80;
const footerHeight = 100;

class Contactus extends Component {

  state = {
    phone: "+9940504281188",
    email: "kamilasgarovv@gmail.com",
    fax: "sadsa",
    time: ""


  }

  render() {
    return (
      <Container>
        <Content style={{ marginHorizontal: 10 }}>
          <View style={{ width: contentWidth, marginTop: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', }}>
              <View style={{ marginHorizontal: 15 }}>

                <Ionicons name="md-phone-portrait" size={32} color="#075E54" />
              </View>
              <View >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {this.state.phone}
                </Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  Phone
              </Text>
              </View>
              <View>

              </View>

            </View>

          </View>
          <View style={{ width: contentWidth, marginTop: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', }}>
              <View style={{ marginHorizontal: 12 }}>

                <Ionicons name="md-mail-open" size={32} color="#B23121" />
              </View>
              <View >
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {this.state.email}
                </Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>
                  Email
              </Text>
              </View>
              <View>

              </View>

            </View>

          </View>
          <View style={{ width: contentWidth, marginTop: 30 }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start', }}>
              <View style={{ marginHorizontal: 13 }}>

                <Ionicons name="md-print" size={32} color="black" />
              </View>
              <View >

                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {this.state.fax}
                </Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>

                 Fax
              </Text>

              </View>


            </View>

          </View>


          <View style={{ width: contentWidth, alignSelf: "center", alignItems: "center", marginTop: 20 }}>

            <MapPicker readOnly />


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
