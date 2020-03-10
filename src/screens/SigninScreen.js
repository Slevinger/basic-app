import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Container } from "../styledComponents";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { signin, clearErrors } = useContext(AuthContext);
  return (
    <Container>
      <NavigationEvents onDidFocus={clearErrors} />

      <AuthForm
        onSubmit={signin}
        submitLabel={"Sign In"}
        headerText={"Login to Tracker"}
      />
      <NavLink
        text={"Dont have an account? Sign up here!"}
        redirectKey="Signup"
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
