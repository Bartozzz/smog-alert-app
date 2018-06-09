export const POLLUTER_ADD_PROOF = 'POLLUTER_ADD_PROOF';
export const POLLUTER_ADD_MARKER = 'POLLUTER_ADD_MARKER';

export const polluterAddProof = image => ({
  type: POLLUTER_ADD_PROOF,
  image,
});

export const polluterAddMarker = coordinate => ({
  type: POLLUTER_ADD_MARKER,
  coordinate,
});
