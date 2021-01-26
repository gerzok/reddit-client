import { GET_TOKEN, GET_TOPLIST } from './actions';

// INITIAL STATE
const initialState = {
  topList: [],
  token: null
}

// SELECTORS
export const topListSelector = state => state.topList;

// REDUCER
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
        topList: {
          ...action.payload,
          data: {
            ...action.payload.data,
            children: action.payload.data.children.map(item => { return { ...item, readStatus: 'unread' } })
          }
        }
      }

    default:
      return state;
  };
}