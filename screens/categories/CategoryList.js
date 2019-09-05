import React, {Component} from 'react';
import ListPage from '../../components/listpage/ListPage';
import { connect } from 'react-redux';
import { setDestinations} from '../../modules/destinations';
import Category from './Category';

class CategoryList extends Component {

  static navigationOptions = {
    title: "Categories",
    header:null
  };

  render(){
    const { destinations } = this.props;
    return (
      <React.Fragment>
          <ListPage list={destinations} renderType={Category}/>
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

export default connect(moduleState, moduleActions)(CategoryList);