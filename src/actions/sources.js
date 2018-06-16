// Provides a list of data sources.
// @see https://docs.openaq.org/#api-Sources

export const SOURCES_REQUEST = "SOURCES_REQUEST";
export const SOURCES_RECEIVE = "SOURCES_RECEIVE";
export const SOURCES_ENDPOINT = "https://api.openaq.org/v1/sources";

export const requestSources = (query = {}) => ({
  type: SOURCES_REQUEST,
  query
});

export const receiveSources = (json, error = null) => ({
  type: SOURCES_RECEIVE,
  receivedAt: Date.now(),
  json,
  error
});
