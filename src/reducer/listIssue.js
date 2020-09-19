import { LISTISSUE } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  listIssue: {},
  repo: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTISSUE.LOADING:
      return {
        ...state,
        loading: true
      };
    case LISTISSUE.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
				listIssue: action.payload.data
      };
    case LISTISSUE.FETCH_REPO_SUCCESS:
      return {
        ...state,
        loading: false,
        repo: action.payload.data
    };
    case LISTISSUE.FETCH_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
