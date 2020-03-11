import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Container } from "../styledComponents";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { signin, clearErrors } = useContext(AuthContext);
  return (
    <Container>
      <AuthForm
        onSubmit={signin}
        submitLabel={"Login"}
        headerText={"Login to Tracker"}
        onBlur={clearErrors}
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
