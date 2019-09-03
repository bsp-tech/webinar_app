import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/settings/SettingsScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import DestinationList from '../screens/destination/DestinationList';

const SearchStack = createStackNavigator({
    Search: {
      screen: HomeScreen,
    }   
  }
);

SearchStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-home' />
  ),
  tabBarVisible: false
};
 
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const DestinationsStack = createStackNavigator({
  DestinationList: DestinationList,
});

DestinationsStack.navigationOptions = {
  tabBarLabel: 'Places',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'ios-pin'}
    />
  ),
};


export default createBottomTabNavigator({
  SearchStack, 
  DestinationsStack,
  SettingsStack
});
