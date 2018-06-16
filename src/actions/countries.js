// Provides a simple listing of countries within the OpenAQ platform.
// @see https://docs.openaq.org/#api-Countries

export const COUNTRIES_REQUEST = "COUNTRIES_REQUEST";
export const COUNTRIES_RECEIVE = "COUNTRIES_RECEIVE";
export const COUNTRIES_ENDPOINT = "https://api.openaq.org/v1/countries";

export const requestCountries = (query = {}) => ({
  type: COUNTRIES_REQUEST,
  query
});

export const receiveCountries = (json, error = null) => ({
  type: COUNTRIES_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
