// Provides a list of measurement locations and their meta data.
// @see https://docs.openaq.org/#api-Locations

export const LOCATIONS_REQUEST = "LOCATIONS_REQUEST";
export const LOCATIONS_RECEIVE = "LOCATIONS_RECEIVE";
export const LOCATIONS_ENDPOINT = "https://api.openaq.org/v1/locations";

export const requestLocations = (query = {}) => ({
  type: LOCATIONS_REQUEST,
  query
});

export const receiveLocations = (json, error = null) => ({
  type: LOCATIONS_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
