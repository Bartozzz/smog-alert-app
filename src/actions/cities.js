// Provides a simple listing of cities within the OpenAQ platform.
// @see https://docs.openaq.org/#api-Cities

export const CITIES_REQUEST = "CITIES_REQUEST";
export const CITIES_RECEIVE = "CITIES_RECEIVE";
export const CITIES_ENDPOINT = "https://api.openaq.org/v1/cities";

export const requestCities = (query = {}) => ({
  type: CITIES_REQUEST,
  query
});

export const receiveCities = (json, error = null) => ({
  type: CITIES_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
