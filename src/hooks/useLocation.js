import { useState, useContext, useEffect, useCallback } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import { Context as LocationContext } from "../context/LocationContext";

const useLocation = (callback, shouldTrack, trackHandler) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);
  const { addLocation } = useContext(LocationContext);
  const startWatching = async () => {
    try {
      const answer = await requestPermissionsAsync();

      if (!answer.granted) {
        setError("Please enable location servieces");
      } else {
        setSubscriber(
          await watchPositionAsync(
            {
              accuracy: Accuracy.BestForNavigation,
              timeInterval: 1000,
              distanceInterval: 1
            },
            addLocation
          )
        );
      }
    } catch (error) {
      setError("Please enable location servieces");
    }
  };

  useEffect(() => {
    const walking = trackHandler && trackHandler.walk();
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
    return () => clearInterval(walking);
  }, [shouldTrack, trackHandler]);

  return { error };
};

export default useLocation;
