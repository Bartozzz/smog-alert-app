import * as R from 'ramda';
import { POLLUTER_ADD_PROOF, POLLUTER_ADD_MARKER } from '../actions/polluter';

const initialState = {
  image: {
    cancelled: false,
    type: 'image',
    uri: '',
    width: 0,
    height: 0,
  },
  coordinate: {
    latitude: 0,
    longitude: 0,
  },
};

export const polluterReducer = (state = initialState, action) => {
  switch (action.type) {
    case POLLUTER_ADD_PROOF:
      return R.assoc('image', action.image)(state);

    case POLLUTER_ADD_MARKER:
      return R.assoc('coordinate', action.coordinate)(state);

    default:
      return state;
  }
};
