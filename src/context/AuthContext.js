import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";
import trackerApi from "../api/tracker";

const authReducder = ({ errorMessages, ...state }, action) => {
  switch (action.type) {
    case "login_success":
      return { ...state, errorMessages: [], token: action.payload };
      break;
    case "add_error":
      return { ...state, errorMessages: [...errorMessages, action.payload] };
      break;
    case "clear_error":
      return {
        ...state,
        errorMessages: errorMessages.filter(
          (message, index) => index !== action.payload
        )
      };
      break;
    case "clear_errors":
      return {
        ...state,
        errorMessages: []
      };
      break;
    case "logout":
      return { token: null, errorMessages: [] };
      break;
    default:
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    if (response.data) {
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "login_success", payload: token });
      navigate("TrackList");
    }
  } catch (error) {
    dispatch({ type: "add_error", payload: error.response.data });
  }
};

const clearError = dispatch => index => {
  dispatch({ type: "clear_error", payload: index });
};
const clearErrors = dispatch => () => {
  dispatch({ type: "clear_errors" });
};
const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    if (response.data) {
      const { token } = response.data;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "login_success", payload: token });
      navigate("TrackList");
    }
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: error.response.data.error || error.response.data
    });
  }
};

const signout = dispatch => () => {
  dispatch({ type: "logout" });
};

export const { Provider, Context } = createDataContext(
  authReducder,
  { signin, signout, signup, clearError, clearErrors },
  { token: null, errorMessages: [] }
);
