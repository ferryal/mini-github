import axios from 'axios';
import config from '../config';
import { LISTISSUE, ISSUEDETAIL } from './ActionTypes';


function loading() {
  return {
    type: LISTISSUE.LOADING
  };
}

function fetchSuccess(data) {
  return {
    type: LISTISSUE.FETCH_SUCCESS,
    payload: { data }
  };
}

function fetchFailed() {
  return {
    type: LISTISSUE.FETCH_FAILED
  };
}

function fetchSuccessRepo(data) {
  return {
    type: LISTISSUE.FETCH_REPO_SUCCESS,
    payload: {
      data
    }
  };
}

function fetchFailedRepo() {
  return {
    type: LISTISSUE.FETCH_REPO_FAILED
  };
}

function fetchSuccessDetail(data) {
  return {
    type: ISSUEDETAIL.FETCH_DETAIL_SUCCESS,
    payload: {data}
  };
}

function fetchFailedDetail() {
  return {
    type: ISSUEDETAIL.FETCH_DETAIL_FAILED
  }
}

export function fetchListIssue(page) {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/search/issues?q=repo:angular/angular/node+type:issue+state:open&per_page=10&page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccess(response));
      } else {
        dispatch(fetchFailed());
      }
    }).catch(() => {
      dispatch(fetchFailed());
    });
  };
}

export function fetchRepo() {
  return (dispatch) => {
    dispatch(loading());
    axios.get(`${config.apiUrl}/repos/angular/angular`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessRepo(response));
      } else {
        dispatch(fetchFailedRepo());
      }
    }).catch(() => {
      dispatch(fetchFailedRepo());
    });
  };
}



export function fetchIssueDetail(id) {
  return (dispatch) => {
    axios.get(`${config.apiUrl}/repos/angular/angular/issues/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) {
        const response = res.data;
        dispatch(fetchSuccessDetail(response));
      } else {
        dispatch(fetchFailedDetail());
      }
    }).catch(() => {
      dispatch(fetchFailedDetail());
    })
  }
}
