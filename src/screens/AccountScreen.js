import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button
        title={"logout"}
        onPress={() => {
          signout();
          navigation.navigate("loginFlow");
        }}
      />
    </>
  );
};

const styled = StyleSheet.create({});

export default AccountScreen;
