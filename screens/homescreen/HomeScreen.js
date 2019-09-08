import { Container, Content } from "native-base";
import React from "react";
import { Dimensions, View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from 'react-redux';
import Api from "../../api/Api";
import images from "../../assets/icons/base64images";
import Gallery from "../../components/Gallery";
import ImageViewer from "../../components/imageviewer/ImageViewer";
import { setDestinations } from '../../modules/destinations';
import WelcomeNavigation from "./welcomeNavigation/WelcomeNavigation";

let win = Dimensions.get("window");
const width = win.width;

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    images:[]
  }

  componentWillMount() {
    Api.loadDestinations(this, false);
    Api.loadGalleries(this, false);
  }

  render() {
    const galleryHeight = 220;
    return ( 
      <Container >
        <Content style={{backgroundColor:"#FFF"}}>
                <View style={{justifyContent:"flex-end"}}>
                    <View style={{backgroundColor:"#FFF",height:70, justifyContent:"flex-end"}}>
                        <ImageViewer 
                              base64
                              uri={images.banner}
                              resizeMode='stretch'
                              style={{ width: "55%", height: 55,bottom:0, alignSelf:"center"}}/>
                    </View>
                    <Gallery 
                    width={width} 
                    height={galleryHeight} 
                    images={this.state.images} />
                </View>
              <WelcomeNavigation/>
        </Content>
      </Container>
    );
  }
}

const moduleActions = {
  setDestinations
}

const moduleState = state => { 
  if(state.auth.loggedInUser){
    Api.token = state.auth.loggedInUser.token;
  }
  return {
  };
}

export default withNavigation(connect(moduleState, moduleActions)(HomeScreen));
