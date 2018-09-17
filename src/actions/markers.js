export const MARKERS_ADD_SINGLE = "MARKERS_ADD_SINGLE";
export const MARKERS_REMOVE_SINGLE = "MARKERS_REMOVE_SINGLE";
export const MARKERS_ADD_BULK = "MARKERS_ADD_BULK";
export const MARKERS_REMOVE_BULK = "MARKERS_REMOVE_BULK";

// Marker types:
export const MARKER_POLLUTER = "MARKER_POLLUTER";
export const MARKER_MEASUREMENT = "MARKER_MEASUREMENT";

/**
 * Adds a single marker on the map.
 *
 * @param   {string}  key
 * @param   {Object}  data
 * @param   {string?} data.id           If no `id` provided – `key` will be used
 * @param   {string}  data.type         Marker's type (polluter, measurement, …)
 * @param   {string?} data.title        Marker's title
 * @param   {string?} data.photo        Marker's photo
 * @param   {string?} data.description  Marker's description
 * @param   {number?} data.distance     Distance from user's location
 * @param   {Array}   data.location     Location in format: [lat, lng]
 */
export const addMarker = (key, data) => ({
  type: MARKERS_ADD_SINGLE,
  key,
  data
});

export const removeMarker = key => ({
  type: MARKERS_REMOVE_SINGLE,
  key
});

export const addMarkers = bulk => ({
  type: MARKERS_ADD_BULK,
  bulk
});

export const removeMarkers = keys => ({
  type: MARKERS_REMOVE_SINGLE,
  keys
});
