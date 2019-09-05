import React from 'react';
import Destination from './Destination';
import ListPage from '../../components/listpage/ListPage';
import { connect } from 'react-redux';
import { setDestinations} from '../../modules/destinations';
import Seminar from "../seminar/Seminar"

class DestinationList extends React.Component {

  static navigationOptions = {
    title: "Places",
    header:null
  };

  render(){
    const { destinations } = this.props;
    return (
      <React.Fragment>
        <Seminar/>
       <ListPage list={destinations} renderType={Destination}/>
       </React.Fragment>
 
    )
  }

}

const moduleState = state => ({
  destinations: state.destinations.list,
});

const moduleActions = {
  setDestinations
}

export default connect(moduleState, moduleActions)(DestinationList);