export const GEOFIRE_UPDATE_CRITERIA = "GEOFIRE_UPDATE_CRITERIA";
export const GEOFIRE_KEY_ENTERED = "GEOFIRE_KEY_ENTERED";
export const GEOFIRE_KEY_EXITED = "GEOFIRE_KEY_EXITED";

export const geofireUpdateCriteria = (center, radius) => ({
  type: GEOFIRE_UPDATE_CRITERIA,
  center,
  radius
});

export const geofireAddKey = (key, location, distance) => ({
  type: GEOFIRE_KEY_ENTERED,
  key,
  location,
  distance
});

export const geofireRemoveKey = key => ({
  type: GEOFIRE_KEY_EXITED,
  key
});
