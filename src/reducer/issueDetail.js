import { ISSUEDETAIL } from '../actions/ActionTypes';

const initialState = {
  loading: false,
  detail: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ISSUEDETAIL.LOADING:
      return {
        ...state,
        loading: true
      };
    case ISSUEDETAIL.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload.data
      };
    case ISSUEDETAIL.FETCH_DETAIL_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
