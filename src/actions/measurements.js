// Provides data about individual measurements.
// @see https://docs.openaq.org/#api-Measurements

export const MEASUREMENTS_REQUEST = "MEASUREMENTS_REQUEST";
export const MEASUREMENTS_RECEIVE = "MEASUREMENTS_RECEIVE";
export const MEASUREMENTS_ENDPOINT = "https://api.openaq.org/v1/measurements";

export const requestMeasurements = (query = {}) => ({
  type: MEASUREMENTS_REQUEST,
  query
});

export const receiveMeasurements = (json, error = null) => ({
  type: MEASUREMENTS_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
