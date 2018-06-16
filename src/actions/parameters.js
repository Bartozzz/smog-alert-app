// Provides a simple listing of parameters within the OpenAQ platform.
// @see https://docs.openaq.org/#api-Parameters

export const PARAMETERS_REQUEST = "PARAMETERS_REQUEST";
export const PARAMETERS_RECEIVE = "PARAMETERS_RECEIVE";
export const PARAMETERS_ENDPOINT = "https://api.openaq.org/v1/parameters";

export const requestParameters = (query = {}) => ({
  type: PARAMETERS_REQUEST,
  query
});

export const receiveParameters = (json, error = null) => ({
  type: PARAMETERS_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
