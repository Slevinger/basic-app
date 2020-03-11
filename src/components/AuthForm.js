import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import Spacer from "./Spacer";
import { TouchableOpacity } from "react-native-gesture-handler";

const AuthForm = ({ submitLabel, onSubmit, headerText, onBlur }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <NavigationEvents onWillBlur={onBlur} />
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label={"Email"}
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label={"Password"}
        secureTextEntry={hidePassword}
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
        rightIcon={
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPressIn={() => {
              setHidePassword(false);
            }}
            onPressOut={() => {
              setHidePassword(true);
            }}
          >
            <MaterialIcons style={{ fontSize: 20 }} name="visibility" />
          </TouchableOpacity>
        }
      />
      <Spacer />
      <Spacer>
        <Button
          title={submitLabel}
          onPress={() => {
            onSubmit({ password, email });
          }}
        />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({});

export default AuthForm;
