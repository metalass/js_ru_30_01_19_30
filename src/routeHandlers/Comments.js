import React, { Component, PropTypes } from 'react'
import CommentsPage from '../components/CommentsPage'
import {browserHistory} from 'react-router'

class CommentsListPage extends Component {
	static propTypes = {

	};

	render() {
		const { page } = this.props.params,
			perPage = 5;
		if (!page) {
			//не делай такого в render(), он должен быть чистой функцией
			browserHistory.replace(`/comments/1`);
			return null;
		} else {
			return <div>
				<CommentsPage page={page} perPage={perPage} key={page} />
                {this.props.children}
			</div>
		}
	}
}

export default CommentsListPage
