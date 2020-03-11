import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Container } from "../styledComponents";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
const SignupScreen = ({ navigation }) => {
  const { signup, clearErrors } = useContext(AuthContext);
  return (
    <Container>
      <NavigationEvents onDidFocus={clearErrors} />
      <AuthForm
        onSubmit={signup}
        submitLabel={"Sign Up"}
        headerText={"Sign Up for Tracker"}
      />
      <NavLink
        text={"Already have an account? Sign in instead"}
        redirectKey="Signin"
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
