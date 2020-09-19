import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListIssue from './schenes/List-Issue';
import IssueDetail from './schenes/Issue-Detail';

class Routes extends Component {
render() {
    return(
			<div>
				<Switch>
					<Route exact path="/" component={ListIssue}/>
					<Route path="/issue/:id" component={IssueDetail} />
					<Redirect to="/" />
				</Switch>
			</div>
    );
	}
}

export default Routes;