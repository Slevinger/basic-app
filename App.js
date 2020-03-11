import React from "react";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import ErrorHandler from "./src/components/ErrorHandler";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    {
      Signup: SignupScreen,
      Signin: SigninScreen
    },
    { headerMode: "none" }
  ),
  mainFlow: createBottomTabNavigator({
    trackDetailsFlow: createStackNavigator(
      {
        TrackList: TrackListScreen,
        TrackDetails: TrackDetailsScreen
      },
      { headerMode: "none" }
    ),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <ErrorHandler>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </ErrorHandler>
    </AuthProvider>
  );
};
