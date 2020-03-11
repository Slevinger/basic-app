import React from "react";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { setNavigator } from "./src/navigationRef";
import ErrorHandler from "./src/components/ErrorHandler";
import { SafeAreaProvider } from "react-native-safe-area-context";

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
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
    <SafeAreaProvider>
      <LocationProvider>
        <AuthProvider>
          <ErrorHandler>
            <App
              ref={navigator => {
                setNavigator(navigator);
              }}
            />
          </ErrorHandler>
        </AuthProvider>
      </LocationProvider>
    </SafeAreaProvider>
  );
};
