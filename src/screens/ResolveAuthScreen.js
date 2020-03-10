import React, { useEffect, useContext } from "react";
import { Context } from "../context/AuthContext";
import NavLink from "../components/NavLink";

const ResolveAuthScreen = ({ showSpinner }) => {
  const { tryLocalSignin } = useContext(Context);
  useEffect(() => {
    tryLocalSignin();
  }, []);
  return null;
};

export default ResolveAuthScreen;
