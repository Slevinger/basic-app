import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import Spacer from "./Spacer";
const AuthForm = ({ submitLabel, onSubmit, headerText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
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
        secureTextEntry
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
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
