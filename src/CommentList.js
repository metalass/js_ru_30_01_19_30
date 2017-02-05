import React, {Component} from 'react'
import Comment from './Comment'
import {phrases} from './phrases'

export default class CommentList extends Component {

	state = {
		isOpen: false
	}

	render() {
		const {comments} = this.props;
		if (comments && comments.length) {
			return (
				<div className="comments">
					{this.getComments()}
					<a href="javascript:void(0);" onClick={this.changeCommentsState}>[ {this.getPhrase("show_comments")} ]</a>
				</div>
			);
		} else {
			return null;
		}
	}

	getComments() {
		if (!this.state.isOpen) return null

		const {comments} = this.props;
		const commentElements = comments.map((comment) => <li key={comment.id}>
			<Comment comment={comment}/>
		</li>)
		return (
			<ul>
					{commentElements}
			</ul>
		);
	}

	getPhrase(phrase_id) {
		return this.state.isOpen ? phrases[phrase_id + "_opened"] : phrases[phrase_id];
	}

	changeCommentsState = (ev) => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}