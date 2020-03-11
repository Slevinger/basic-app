import createDataContext from "./createDataContext";

const locationReducer = ({ currentTrack = [], ...state }, action) => {
  switch (action.type) {
    case "add_location":
      return {
        ...state,
        currentTrack: state.recording
          ? [...currentTrack, action.payload]
          : currentTrack,
        currentLocation: action.payload
      };

      break;
    case "start_recording":
      return { ...state, currentTrack, recording: true };
      break;
    case "stop_recording":
      return { ...state, currentTrack, recording: false };
      break;
    case "set_name":
      return { ...state, name: action.payload };
      break;
    default:
      return state;
  }
};

const setName = dispatch => name => {
  dispatch({ type: "set_name", payload: name });
};
const startRecording = dispatch => () => {
  dispatch({ type: "start_recording" });
};
const stopRecording = dispatch => () => {
  dispatch({ type: "stop_recording" });
};
const addLocation = dispatch => location => {
  if (location && location.mocked) {
    dispatch({ type: "add_location", payload: location });
  }
};

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, setName },
  {
    recording: false,
    currentLocation: { coords: {} },
    currentTrack: [],
    name: ""
  }
);
