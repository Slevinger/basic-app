import React, { useState, useMemo } from "react";
import { Input } from "react-native-elements";
export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailInput = useMemo(
    () => () => (
      <Input
        label={"Email"}
        value={email}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setEmail}
      />
    ),
    []
  );

  const PasswordInput = useMemo(
    () => () => (
      <Input
        label={"Password"}
        value={password}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setPassword}
      />
    ),
    []
  );

  return { PasswordInput, EmailInput, form: { email, password } };
};
