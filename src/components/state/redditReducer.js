import { GET_TOKEN } from './actions';

const initialState = {
  topList: [],
  token: null
}

export const redditReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case GET_TOPLIST:
      return {
        ...state,
        topList: action.payload
      }

    default:
      return state;
  };
}