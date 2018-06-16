export const MARKERS_ADD_SINGLE = "MARKERS_ADD_SINGLE";
export const MARKERS_ADD_BULK = "MARKERS_ADD_BULK";

// Marker types:
export const MARKER_POLLUTER = "MARKER_POLLUTER";
export const MARKER_MEASUREMENT = "MARKER_MEASUREMENT";

export const addMarker = (key, data) => ({
  type: MARKERS_ADD_SINGLE,
  key,
  data
});

export const addMarkers = bulk => ({
  type: MARKERS_ADD_BULK,
  bulk
});
