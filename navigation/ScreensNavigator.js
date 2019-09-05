import { createStackNavigator } from 'react-navigation';

import DestinationInfo from '../screens/destination/DestinationInfo';
import MainTabNavigator from './MainTabNavigator';
import BookSummary from '../screens/book/BookSummary';
import Login from '../screens/settings/loginregister/login/Login';
import Feedback from '../screens/settings/feedback/Feedback';
import GetHelp from '../screens/settings/help/GetHelp';
import Aboutus from '../screens/settings/about/Aboutus';
import Register from '../screens/settings/loginregister/register/Register';
import EditProfile from '../screens/settings/loginregister/EditProfile';
import HomeScreen from '../screens/homescreen/HomeScreen';
import VerifyEmail from '../screens/settings/loginregister/forgotpassword/VerifyEmail';
import ResetPassword from '../screens/settings/loginregister/forgotpassword/ResetPassword';
import SendForgotKey from '../screens/settings/loginregister/forgotpassword/SendForgotKey';
import DestinationList from '../screens/destination/DestinationList';

export default createStackNavigator({

  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      visible: false
    }
  },
  MainNavigator: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  DestinationInfo: DestinationInfo,
  BookSummary: {
    screen: BookSummary,
    navigationOptions:{
      title: "Contact Details"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: {
      title: "Feedback"
    }
  },
  GetHelp: {
    screen: GetHelp,
    navigationOptions: {
      title: "Help"
    }
  },
  Aboutus: {
    screen: Aboutus,
    navigationOptions: {
      title: "About Us"
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register"
    }
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: "Edit Profile"
    }
  },
  SendForgotKey: {
    screen: SendForgotKey,
    navigationOptions: {
      title: "Send Verification Code"
    }
  },
  VerifyEmail: {
    screen: VerifyEmail,
    navigationOptions: {
      title: "Verify Email"
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      title: "Reset Password"
    }
  },
  VideoList: {
    screen: DestinationList,
    navigationOptions: {
      title: "Videos in this Category"
    }
  }
});

