import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const walkStepFrom = ({ coords }, move) => {
  const destruct = move
    ? {
        [move.axis]: coords[move.axis] + tenMetersWithDegrees * move.dir
      }
    : {};
  const ret = {
    speed: 0,
    heading: 0,
    accuracy: 5,
    altitutdeAcurracy: 5,
    ...coords,
    ...destruct
  };
  return ret;
};

export const getLocation = (currentLocation, move) => {
  try {
    return {
      timestamp: Date.now(),
      mocked: true,
      coords: walkStepFrom(currentLocation, move)
    };
  } catch (err) {
    console.log(err);
  }
};

export const startingPoint = {
  coords: {
    latitude: 32.0944701,
    longitude: 34.7849818
  }
};

export class pathTracker {
  currentLocation;
  tracks;

  dirMap = {
    up: { axis: "latitude", dir: 1 },
    down: { axis: "latitude", dir: -1 },
    left: { axis: "longitude", dir: -1 },
    right: { axis: "longitude", dir: 1 }
  };

  constructor(startingPoint) {
    this.currentLocation = getLocation(startingPoint);
    this.tracks = [];
  }

  createTrack() {
    const self = this;
    return (function() {
      const track = [];
      self.tracks.push(track);
      return {
        traverse: (dir, steps = 1) => {
          const move = self.dirMap[dir];
          for (let i = 0; i <= steps; i++) {
            track.push(move);
          }
        },
        walk() {
          const track = this.track;

          if (track && track.length > 0) {
            let counter = 0;
            const interval = setInterval(() => {
              self.currentLocation = getLocation(
                self.currentLocation,
                track[counter % track.length]
              );
              console.log(`walking => step ${counter}`);
              Location.EventEmitter.emit("Expo.locationChanged", {
                watchId: Location._getCurrentWatchId(),
                location: self.currentLocation
              });
              counter++;
            }, 1000);
            return interval;
          }
        },
        track
      };
    })();
  }
}
