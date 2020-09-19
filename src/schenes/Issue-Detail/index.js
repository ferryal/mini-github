import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showdown from 'showdown';
import { fetchIssueDetail, fetchRepo } from '../../actions/List-Issue';
import 'react-toastify/dist/ReactToastify.css';

const IssueDetail = (props) => {
	const dispatch = useDispatch();
	const detailIssue = useSelector(state => state.issueDetail);
	const listIssue = useSelector(state => state.listIssue);

	useEffect(() => {
		dispatch(fetchIssueDetail(props.match.params.id));
		dispatch(fetchRepo());
	}, [dispatch]);

	const { repo } = listIssue;
	const { detail } = detailIssue;
	const { labels } = detail;

	// convert markdown to html
	let  converter = new showdown.Converter();
	let  detailBody = detail !== undefined ? converter.makeHtml(detail.body) : '';

    return(
			<React.Fragment>
				<div className="wrapper-header">
					{ repo !== undefined ? repo.name : ''}
					<br />
					<p>ISSUES</p>
				</div>
				<div className="wrapper-title">
					<h1>{ detail !== undefined ? detail.title : ''} #{ detail !== undefined ? detail.number : ''}</h1>
					<span className="badge f-size-16 badge-success">{ detail !== undefined ? detail.state : ''}</span>
				</div>
				<div className="wrapper-body-detail">
					<div className="detail" dangerouslySetInnerHTML={{ __html: detailBody }} />
					<div className="wrapper-label">
						<h5>Label</h5>
						{
							detail !== undefined && detail.labels !== undefined ? detail.labels.map((data) => (
								<span className="badge" style={{ backgroundColor: `#${data.color}`, fontSize: '14px'}}>{data.name}</span>
							)) : ''
						}
					</div>
				</div>
			</React.Fragment>
    )

}

export default IssueDetail;
