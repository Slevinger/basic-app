import React, { useState, useContext } from "react";
import { Input, Button } from "react-native-elements";
import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackForm = ({ name = "" }) => {
  const [trackName, setTrackName] = useState(name);
  const {
    state: { recording },
    stopRecording,
    startRecording
  } = useContext(LocationContext);
  console.log("renderd");
  return (
    <>
      <Spacer>
        <Input
          placeholder={"Track Name"}
          value={trackName}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={setTrackName}
        />
      </Spacer>
      <Button
        title={recording ? "STOP" : "RECORD"}
        onPress={recording ? stopRecording : startRecording}
      />
    </>
  );
};

export default TrackForm;
