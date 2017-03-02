import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Loader from './Loader'
import {loadCommentsPage} from '../AC'
import Comment from './Comment'
import Paging from './Paging'
import {Link} from 'react-router'
import {browserHistory} from 'react-router'

class CommentsPage extends Component {
	componentDidMount() {
		const { loadCommentsPage, page, perPage } = this.props
		const comments = this.getCommentsArray();
		if (!comments || !comments.length) loadCommentsPage(perPage, (page - 1) * perPage);
	}
	//лучше в connect вынести
	getCommentsArray() {
		//return []; так можно сымитировать отсутствие комментариев и проверить, что все нормально выводится
		const {comments, loading, page, perPage} = this.props
		let commentsSlice = comments.slice((page - 1) * perPage, page * perPage).toJS();
		return commentsSlice.reduce((result, currentValue) => currentValue === null ? [] : result, commentsSlice); // если в массиве есть null, значит необходимо загрузить заданную страницу
	}

	static propTypes = {
	}

	render() {
		const {loading, loaded, page} = this.props
		const comments = this.getCommentsArray();


		if (loaded && !comments.length && page != 1) {
			// Несуществующая страница
			//и снова не в render()
			browserHistory.replace(`/comments/1`);
		}
		if (loaded && !comments.length && page == 1) {
			return (
				<div>
					<h2>No comments yet :(</h2>
				</div>
			)
		}
		if (loading || !comments.length) {
			return <Loader/>
		}

		const commentItems = comments.map(id => <li key={id}><Comment id={id} /></li>)

		return (
			<div>
				<h2>Comments, page {page}</h2>
				<Paging {...this.props} url="/comments/" />
				<ul>{commentItems}</ul>
			</div>
		)
	}
}

export default connect((state) => {
	return {
		comments: state.commentsPage.entities,
		loading: state.commentsPage.isLoading,
		loaded: state.commentsPage.isLoaded,
		total: state.commentsPage.total
	}
}, { loadCommentsPage })(CommentsPage)


