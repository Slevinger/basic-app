import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, currentTrack, recording }
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  } else {
    const { latitude, longitude } = currentLocation.coords;
    const points = recording ? currentTrack.map(({ coords }) => coords) : [];
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        }}
      >
        {latitude && longitude && (
          <Circle
            center={{ latitude, longitude }}
            radius={30}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
          />
        )}
        <Polyline coordinates={points} />
      </MapView>
    );
  }
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
