import {
  GET_TOKEN,
  GET_TOPLIST,
  GET_MORE_TOPLIST,
  NEXT_PAGE_PAGINATION,
  INITIAL_TOP_LIST
} from './actions';

// INITIAL STATE
const initialState = {
  topList: [],
  token: null,
  pagination: [],
  totalPagination: 1
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
    case GET_MORE_TOPLIST:
      return {
        ...state,
        pagination: [...state.pagination, action.payload]
      }
    case NEXT_PAGE_PAGINATION:
      return {
        ...state,
        initialList: state.topList,
        topList: {
          ...state.pagination[action.payload],
          data: {
            ...state.pagination[action.payload].data,
            children: state.pagination[action.payload].data.children.map(item => { return { ...item, readStatus: 'unread' } })
          }
        }
      }
    case INITIAL_TOP_LIST:
      return {
        ...state,
        topList: {
          ...state.initialList
        }
      }

    default:
      return state;
  };
}