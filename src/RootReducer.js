import { combineReducers } from 'redux';
import { reducer as listIssue } from './reducer/listIssue';
import { reducer as issueDetail } from './reducer/issueDetail';

export default combineReducers({
  listIssue,
  issueDetail
});
