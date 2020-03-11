import React from "react";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const NavLink = ({ text, redirectKey, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(redirectKey)}>
      <Text style={{ color: "blue", alignSelf: "center", fontSize: 16 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NavLink);
//
