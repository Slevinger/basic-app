import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const ErrorDialog = () => {
  const {
    state: { errorMessages },
    clearError
  } = useContext(AuthContext);
  return (
    errorMessages.length > 0 && (
      <View style={styles.dialog}>
        {errorMessages.map((message, index) => (
          <TouchableOpacity key={index} onPress={() => clearError(index)}>
            <Text style={styles.errorMessages}>{message}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  );
};

const ErrorHandler = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        borderWidth: 10
      }}
    >
      <ErrorDialog />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessages: {
    fontSize: 16,
    padding: 10,
    marginTop: 15,
    justifyContent: "center",
    color: "white",
    backgroundColor: "rgba(255,0,0,0.7)"
  },
  dialog: {
    position: "absolute",
    marginTop: 25,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flex: 1
  }
});

export default ErrorHandler;
