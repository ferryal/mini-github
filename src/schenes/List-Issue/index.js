import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchListIssue, fetchRepo } from '../../actions/List-Issue';

const ListIssue = () => {
	const card = useSelector(state => state.listIssue);
	const dispatch = useDispatch();
	const [currentPage] = useState(1);
	useEffect(() => {
		dispatch(fetchListIssue(1));
		dispatch(fetchRepo());
	}, [dispatch])


	const { listIssue, repo } = card;
	const { items } = listIssue;

	const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(listIssue.total_count / 10); i++) {
        pageNumbers.push(i);
      }


    const  renderPageNumbers = pageNumbers.map(number => {
		let classes = currentPage === number ? 'active' : '';
        return (
          <span key={number} className={classes} onClick={() => dispatch(fetchListIssue(number))}>{number}</span>
        );
      });

	return (
		<Fragment>
			<div className="wrapper-header">
				{ repo !== undefined ? repo.name : ''}
				<p>ISSUES</p>
			</div>
			<div className="wrapper-body">
				<div className="head-issue">
					<p>{ repo !== undefined ? repo.open_issues_count : 0} Open <span> 500 Closed</span><span>Labels Filter</span></p>
				</div>
				{
					items !== undefined ?
					items.map(data => {
						return (
							<div className="body-issue">
								<Link to={`/issue/${data.number}`}>{data.title}</Link>
							</div>
						);
					}) : ''
				}
				<div className="pagination">
					<span onClick={() => this.makeHttpRequestWithPage(1)}>&laquo;</span>
					{renderPageNumbers}
					<span onClick={() => this.makeHttpRequestWithPage(1)}>&raquo;</span>
				</div>
			</div>
		</Fragment>
	)

}

export default ListIssue;
