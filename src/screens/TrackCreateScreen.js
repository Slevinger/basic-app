import React, { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Map from "../components/Map";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import { withNavigationFocus } from "react-navigation";
import { Context } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { pathTracker, startingPoint } from "../screens/_mockLocations";

const tracker = new pathTracker(startingPoint);
const track1Handler = tracker.createTrack();
track1Handler.traverse("down", 2);
track1Handler.traverse("left", 3);
track1Handler.traverse("down", 3);
track1Handler.traverse("left", 1);
track1Handler.traverse("down", 3);

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
    startRecording,
    stopRecording
  } = useContext(Context);

  useEffect(() => {
    addLocation(tracker.currentLocation);
  }, []);

  const { error } = useLocation(
    addLocation,
    isFocused || recording,
    track1Handler
  );

  return (
    <>
      <Text h2>Create a track</Text>
      <Map />

      {error ? <Text>{error}</Text> : null}
      <Input />
      <Button
        title={recording ? "STOP" : "RECORD"}
        onPress={recording ? stopRecording : startRecording}
      ></Button>
    </>
  );
};

const styled = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
