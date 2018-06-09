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
      return { ...state, image: action.image };

    case POLLUTER_ADD_MARKER:
      return { ...state, coordinate: action.coordinate };

    default:
      return state;
  }
};
